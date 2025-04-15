# NeaHack-plugin
This project is a two day challange we decided to make to learn about different technologies. This is our first plugin!
This Chrome extension allows users to preview and process clothing images from websites like Zara using a custom 3D triangulation tool. It provides an overlay where users can paste or enter an image URL, then send it to a local server for processing.

## ▶️ How to Run the Project

### Requirements:
- Python 3.8+
- pip

### Step-by-step:

```bash
# Create and activate virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn opencv-python matplotlib shapely scipy numpy

# Run the FastAPI server see Nea-Hack-image-processor

### 🌐 2. Load the Chrome Plugin

To run the Chrome extension locally, follow these steps:

1. Open Google Chrome and go to: chrome://extensions/

2. In the top-right corner, enable **Developer mode**.

3. Click the **"Load unpacked"** button.

4. Select the folder containing the plugin files, which should include:

- `manifest.json` — the extension configuration
- `content.js` — code that injects the button and viewer into the webpage
- `viewer.html` — the popup interface that appears when clicked
- `script.js` — logic for handling pasted images, requests, and feedback

5. Once loaded, go to any website like `https://www.zara.com`.

6. You will see a button at the bottom right of the page:

