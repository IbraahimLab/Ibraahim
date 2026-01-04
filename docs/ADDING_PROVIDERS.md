# How to Add a New Provider

The "Intuition" behind adding a provider in Ibraahim is **Adapter Pattern**. 

The framework speaks one language (`BaseLLM`), and external APIs speak their own languages. Your job is to write a translator.

## The Recipe

### 1. The Contract
Every provider must inherit from `BaseLLM` and implement one method: `generate`.

```python
class MyNewProvider(BaseLLM):
    def generate(self, prompt: str, config: Dict) -> LLMResult:
        # ... logic ...
```

### 2. The Three Steps inside `generate`

1.  **Translate Config**: Take `config` (Ibraahim generic) and map it to `api_params` (Provider specific).
2.  **Call API**: Make the network request.
3.  **Translate Result**: Take the raw API response and converting it into `LLMResult`.

## Example: Adding Anthropic

If we were to add Anthropic, the plan would be:

1.  **Install SDK**: `pip install anthropic`
2.  **Create File**: `src/ibraahim/providers/anthropic.py`
3.  **Implementation**:

```python
from anthropic import Anthropic
from ibraahim.core.llm import BaseLLM, LLMResult

class AnthropicProvider(BaseLLM):
    def __init__(self, api_key=None):
        self.client = Anthropic(api_key=api_key)

    def generate(self, prompt, config=None):
        # 1. Call API
        message = self.client.messages.create(
            model="claude-3-opus-20240229",
            max_tokens=1024,
            messages=[{"role": "user", "content": prompt}]
        )
        
        # 2. Extract Text
        text = message.content[0].text
        
        # 3. Return Standard Result
        return LLMResult(text=text, provider_name="anthropic")
```

## Why this is powerful
Because `LLMChain` only knows about `BaseLLM`, you can swap `OpenAIProvider` for `AnthropicProvider` and **not a single line of your application logic changes**.
