---
layout: single
author_profile: true
share: true
comments: true
title: Notes on Foundational Large Language Models & Text Generation
---

Notes from Google's [Foundational Large Language Models & Text Generation](https://www.kaggle.com/whitepaper-foundational-llm-and-text-generation) white paper(part of the Kaggle/Google Deep Dive on LLM Course)


Fine tuning methods:

1. Supervised Fine Tuning
    - Give a LLM a crash course specifically designed for a task. e.g. a whiz of summarizing research papers, train it on research papers and summaries of papers.
2. Reinforcement learning from human feedback(RHLF)
    - We use human feedback to train a reward model ( a judge that tells whether a response from LLM is good or bad)
3. Parameter efficient fine tuning(PEFT)
    - Tackles a real world problem - instead of retraining whole model, we can only retrain special modules of the LLM.

How do we talk to the LLM? We use prompt engineering(give our LLM a clear recipe)

- The way that we phrase our prompts can make a world of difference.
- Zero shot prompting - we give it a task and tell it to give a response
- Few shot prompting - Give it a few examples
- Chain of thought prompting - Tell it step by step to do the task.

Sampling techniques control how the LLM picks up the enxt word/its style.

Techniques:

- greedy search
- random sampling - throwing some unpredictibility
- temperature sampling - balance between predictabiity and creativity

**Inference optimization techniques - how to make inference better.**

- quantization - streamling hte models internal calculations(use lower precision numbers/using “shorthands”)
- distillation - train a smaller,faster “student” model that mimics the “teacher” model
- output preserving methods - guarantees that the models’ performance remains unchanged.
- prefix caching - imp for chat bots, cases where it needs to save previous answers.
- speculative decoding - have a team of assistants working in parallel

**Most exciting applications:**

1. code generation
2. machine translation
3. creative content generation
4. reasoning about abstract math problems.
5. translating languages
