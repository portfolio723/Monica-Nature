// src/ai/flows/context-aware-scroll-lock.ts
'use server';

/**
 * @fileOverview Manages scroll locking based on media loading status.
 *
 * This file exports:
 * - `lockScroll` - A function to lock the scroll.
 * - `unlockScroll` - A function to unlock the scroll.
 * - `ScrollLockInput` - The input type for the scroll lock functions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ScrollLockInputSchema = z.object({
  isLoading: z.boolean().describe('Whether the media is currently loading.'),
  isExpanded: z.boolean().describe('Whether the media is fully expanded.'),
});

export type ScrollLockInput = z.infer<typeof ScrollLockInputSchema>;

const ScrollLockOutputSchema = z.object({
  scrollLocked: z.boolean().describe('Whether the scroll should be locked.'),
});

export type ScrollLockOutput = z.infer<typeof ScrollLockOutputSchema>;

export async function lockScroll(input: ScrollLockInput): Promise<ScrollLockOutput> {
  return scrollLockFlow(input);
}

export async function unlockScroll(input: Omit<ScrollLockInput, 'isLoading'>): Promise<ScrollLockOutput> {
  return scrollLockFlow({...input, isLoading: false});
}

const scrollLockPrompt = ai.definePrompt({
  name: 'scrollLockPrompt',
  input: {schema: ScrollLockInputSchema},
  output: {schema: ScrollLockOutputSchema},
  prompt: `You are a scroll manager that locks or unlocks the scroll based on the state of the media loading and expansion.

  If the media is loading (isLoading is true), you MUST set scrollLocked to true to prevent scroll glitches.
  If the media is fully expanded (isExpanded is true) you MUST set scrollLocked to false to enable scrolling.
  In any other case, you MUST set scrollLocked to true to prevent scroll glitches during animation.

  Here's the current state:
  Is Loading: {{{isLoading}}}
  Is Expanded: {{{isExpanded}}}

  Return a JSON object indicating whether the scroll should be locked.
`,
});

const scrollLockFlow = ai.defineFlow(
  {
    name: 'scrollLockFlow',
    inputSchema: ScrollLockInputSchema,
    outputSchema: ScrollLockOutputSchema,
  },
  async input => {
    const {output} = await scrollLockPrompt(input);
    return output!;
  }
);
