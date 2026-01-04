# How to Release Ibraahim (v1)

To make your framework downloadable by everyone, you have two main options.

## Option 1: PyPI (The Gold Standard)
This allows users to run `pip install ibraahim`.

### Prerequisites
1.  Create an account on [PyPI.org](https://pypi.org/).
2.  (Optional) Create an API token in your account settings.

### Steps
1.  **Check the Name**: Search PyPI to ensure "ibraahim" isn't already taken. If it is, change `name` in `pyproject.toml` (e.g., `ibraahim-core`).
2.  **Build the Package**:
    ```bash
    pip install poetry
    poetry build
    ```
    This creates a `.whl` and `.tar.gz` file in a `dist/` folder.
3.  **Publish**:
    ```bash
    poetry publish
    ```
    (You will be prompted for your username/token).

## Option 2: GitHub (Zero Config)
If you don't want to register on PyPI yet, users can install directly from your Git repository.

### Steps
1.  Push your code to a public GitHub repository.
2.  Tell users to run:
    ```bash
    pip install git+https://github.com/YOUR_USERNAME/ibraahim.git
    ```

## Recommendation for v1
Start with **Option 2 (GitHub)** while you test with a few friends. Once confident, move to **Option 1 (PyPI)** for the official release.
