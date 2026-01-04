# Publishing Log

Successfully published `ibraahim` (v0.1.0) to PyPI.

**Date**: 2026-01-04
**URL**: [https://pypi.org/project/ibraahim/](https://pypi.org/project/ibraahim/)

## Detailed Steps Executed

The following commands were used to authenticate and push the project.

### 1. Install Publishing Tools
We used `poetry` to handle the build and publish process.
```powershell
pip install poetry
```

### 2. Authenticate
Configured Poetry with your API Token.
*(Note: Token hidden for security)*
```powershell
python -m poetry config pypi-token.pypi pypi-AgEIcHlwaS...
```

### 3. Build and Publish
This command built the distribution files (`.whl` and `.tar.gz`) and uploaded them to PyPI.
```powershell
python -m poetry publish --build
```

**Output Log**:
```text
Building ibraahim (0.1.0)
 - Built ibraahim-0.1.0.tar.gz
 - Built ibraahim-0.1.0-py3-none-any.whl
Publishing ibraahim (0.1.0) to PyPI
 - Uploading ibraahim-0.1.0-py3-none-any.whl 100%
 - Uploading ibraahim-0.1.0.tar.gz 100%
```

## How to Install
Anyone can now install your framework via:
```bash
pip install ibraahim
```
