# Product Requirements Document (PRD)

## Product Name
**Ibraahim**

---

## 1. Overview

Ibraahim is a lightweight Python framework that provides a **provider-agnostic interface for Large Language Models (LLMs)**.

The product allows developers to:
- Use different LLM providers through a single, stable interface
- Compose LLM calls in a structured and reusable way
- Build deterministic LLM workflows without hidden behaviour

This version intentionally excludes advanced features such as agents, RAG, memory, or observability.

---

## 2. Problem Statement

LLM developers face repeated friction when working with multiple model providers:

- APIs differ across providers (request format, response shape, config)
- Switching providers requires refactoring application logic
- Prompt logic and model calls are tightly coupled
- Early experiments turn into unstructured, unmaintainable scripts

Existing frameworks solve this problem but introduce excessive abstraction and implicit behaviour.

Ibraahim solves the same core problem with **fewer concepts, explicit contracts, and minimal surface area**.

---

## 3. Goals

- Provide a unified interface for multiple LLM providers
- Enable easy provider switching with no change to business logic
- Make LLM workflows explicit, deterministic, and debuggable
- Keep the entire codebase understandable by a single engineer

---

## 4. Non-Goals (v1)

The following are explicitly out of scope:

- Agents or autonomous loops
- Retrieval-Augmented Generation (RAG)
- Vector databases
- Memory or stateful conversations
- Async or streaming APIs
- UI dashboards or observability tooling

---

## 5. Target Users

### Primary Users
- AI engineers
- ML engineers
- Backend engineers integrating LLMs

### Excluded Users
- Non-technical users
- No-code / low-code audiences

---

## 6. Core Product Principles

1. **Explicit over implicit**
2. **Data in, data out**
3. **Provider-agnostic by design**
4. **Minimal abstractions**

---

## 7. Core Abstractions (v1)

- PromptTemplate
- BaseLLM
- LLMResult
- Chain
- LLMChain
- SequentialChain

---

## 8. Success Metrics

- Time to switch providers
- Simplicity of abstractions
- Ease of understanding the codebase

---
