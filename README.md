# Ibraahim 🚀

**The Minimalist, Provider-Agnostic LLM Framework for Python.**

[![PyPI version](https://badge.fury.io/py/ibraahim.svg)](https://badge.fury.io/py/ibraahim)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 👋 What is Ibraahim?

Ibraahim is a tool that helps you build AI applications without getting locked into a single provider (like OpenAI or Anthropic).

It enforces a simple philosophy: **"Write once, run anywhere."**

### Why use it?
- **🔌 Switch Providers Instantly**: Change from GPT-4 to Llama 3 with 1 line of code.
- **🚫 No "Magic"**: No hidden agents or complex loops. You control exactly what happens.
- **🛡️ Type-Safe**: Built with Pydantic for robust data validation.

---

## 📦 Installation

You can install Ibraahim directly from PyPI:

```bash
pip install ibraahim
```

---

## ⚡ Quick Start

### 1. The "Hello World" Example

Here is how you create a simple chain that asks an AI to translate text.

```python
from ibraahim.prompts import PromptTemplate
from ibraahim.providers import OpenAIProvider
from ibraahim.chains import LLMChain

# 1. Define WHAT you want ( The Prompt )
template = PromptTemplate("Translate '{text}' to {language}.")

# 2. Define WHO does it ( The Provider )
# Works with OpenAI, Groq, DeepSeek, etc.
llm = OpenAIProvider(api_key="sk-...")

# 3. Connect them ( The Chain )
chain = LLMChain(prompt=template, llm=llm)

# 4. Run it!
result = chain({"text": "Hello Friend", "language": "Arabic"})
print(result["text"])
# Output: "مرحبا يا صديقي"
```

---

## 💡 Advanced Usage

### Using Groq (Fast & Cheap)

Because Ibraahim is standard-compliant, you can use high-performance models on Groq simply by changing the URL.

```python
llm = OpenAIProvider(
    model="llama-3.1-8b-instant",
    base_url="https://api.groq.com/openai/v1",
    api_key="gsk_..."
)
```

### Chaining Multiple Steps

You can link multiple steps together. For example, **Generate a Title** -> **Write a Story**.

```python
from ibraahim.chains import SequentialChain

# Step 1: Generate a Title
chain1 = LLMChain(
    prompt=PromptTemplate("Give me a book title about {topic}"),
    llm=llm,
    output_key="title"
)

# Step 2: Write the Blurb
chain2 = LLMChain(
    prompt=PromptTemplate("Write a short blurb for a book called '{title}'"),
    llm=llm,
    output_key="blurb"
)

# Link them
seq_chain = SequentialChain(
    chains=[chain1, chain2],
    input_variables=["topic"],
    output_variables=["title", "blurb"]
)

result = seq_chain({"topic": "Time Travel"})
print(result["blurb"])
```

---

## 🛠️ Project Structure

for developers who want to contribute:

```text
src/ibraahim/
├── core/       # Base types (LLMResult, BaseLLM)
├── prompts/    # PromptTemplate logic
├── chains/     # Logic execution flow
└── providers/  # Adapters for OpenAI, etc.
```

---

## 🤝 Contributing

We welcome contributions! Please see `docs/ADDING_PROVIDERS.md` to learn how to add support for Gemeni, Cohere, and others.

---

*Built with ❤️ by the Ibraahim Team*
