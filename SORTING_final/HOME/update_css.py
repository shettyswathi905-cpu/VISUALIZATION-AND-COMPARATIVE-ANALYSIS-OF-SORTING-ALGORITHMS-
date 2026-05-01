import os

dir_path = r'c:\Users\SWATHI\Desktop\SORTING_final'

css_to_append = '''
/* --- PREMIUM PROFESSIONAL REDESIGN --- */

/* Global Body Styling */
body * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
}

body {
    background-color: #f0f4f8 !important; /* Soft, professional blue-grey background */
    color: #333 !important;
}

/* Header Styling */
.head {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    color: white !important;
    border-radius: 12px !important;
    padding: 15px 30px !important;
    margin-top: 30px !important;
    margin-bottom: 30px !important;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
    border: none !important;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700 !important;
}

/* Array Visualization Container */
#array {
    background-color: #ffffff !important;
    height: 400px !important;
    width: 85% !important;
    max-width: 900px !important;
    border-radius: 16px !important;
    box-shadow: 0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07) !important;
    border: 1px solid #e1e5eb !important;
    margin: 0 auto 40px auto !important;
    position: relative !important;
}

/* Array Blocks (Bars) */
.block {
    background: linear-gradient(180deg, #6b5b95 0%, #4a3b69 100%) !important;
    border-radius: 6px 6px 0 0 !important;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important;
    margin: 0 2px !important; /* Add tiny gap between bars */
    width: 35px !important; /* slightly wider */
}

/* Input Field */
input[type="text"] {
    background-color: #ffffff !important;
    color: #333 !important;
    border: 2px solid #cbd5e1 !important;
    border-radius: 8px !important;
    padding: 10px 20px !important;
    font-size: 24px !important;
    font-family: 'Courier New', Courier, monospace !important;
    transition: all 0.3s ease !important;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05) !important;
    width: 50% !important;
    min-width: 300px !important;
}

input[type="text"]:focus {
    border-color: #764ba2 !important;
    outline: none !important;
    box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.2) !important;
}

/* Button Container */
div[style*="margin: auto; width: fit-content"] {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 15px !important;
    width: 90% !important;
    margin: 0 auto !important;
    padding: 20px !important;
    background: transparent !important;
}

/* All Buttons */
button {
    background: linear-gradient(135deg, #6f459e 0%, #512b7a 100%) !important;
    color: white !important;
    padding: 12px 24px !important;
    border-radius: 8px !important;
    font-weight: 600 !important;
    letter-spacing: 0.5px !important;
    border: none !important;
    cursor: pointer !important;
    transition: transform 0.2s, box-shadow 0.2s !important;
    box-shadow: 0 4px 6px rgba(111, 69, 158, 0.25) !important;
    margin: 0 !important;
}

button:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 7px 14px rgba(111, 69, 158, 0.35) !important;
    background: linear-gradient(135deg, #7c4db3 0%, #5d318c 100%) !important;
}

button:disabled {
    background: #cbd5e1 !important;
    color: #94a3b8 !important;
    cursor: not-allowed !important;
    transform: none !important;
    box-shadow: none !important;
}

/* Text Outputs (Time/Space Complexity) */
div[id^="text"] {
    font-family: 'Inter', 'Segoe UI', sans-serif !important;
    font-size: 22px !important;
    color: #475569 !important;
    margin: 10px 10px !important;
    font-weight: 500 !important;
    background: white !important;
    padding: 10px 20px !important;
    border-radius: 8px !important;
    display: inline-block !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important;
}

/* Navigation Buttons */
.nextprev ul li {
    background: white !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1) !important;
    border: 2px solid #e1e5eb !important;
}

.nextprev ul li span {
    border-color: #6f459e !important;
    background: transparent !important;
}

.nextprev ul li.next span:before, .nextprev ul li.prev span:before {
    background: #6f459e !important;
}

.nextprev ul li:hover {
    background: #6f459e !important;
    border-color: #6f459e !important;
}

.nextprev ul li:hover span {
    border-color: white !important;
}

.nextprev ul li:hover span:before {
    background: white !important;
}
'''

for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith('style.css'):
            file_path = os.path.join(root, file)
            with open(file_path, 'a', encoding='utf-8') as f:
                f.write(css_to_append)
            print(f'Updated {file_path}')

# Now replace HOME/project.css entirely
home_css = '''
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #f0f4f8;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.head {
    margin-top: 20px;
    margin-bottom: 40px;
    width: 80%;
    text-align: center;
    font-size: 28px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 12px;
    font-weight: 800;
    padding: 20px 40px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* We don't have a container for buttons in project.html, they are just loose in body */
button {
    background: linear-gradient(135deg, #288ee8 0%, #1a5ca6 100%);
    padding: 20px 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    width: 28%;
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin: 10px;
    box-shadow: 0 4px 10px rgba(40, 142, 232, 0.3);
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
    letter-spacing: 1px;
}

button:hover {
    background: linear-gradient(135deg, #329df0 0%, #1f6abf 100%);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(40, 142, 232, 0.4);
}

button#btn12 {
    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
    width: 50%;
    margin-top: 30px;
    font-size: 20px;
    padding: 25px;
    box-shadow: 0 4px 10px rgba(229, 62, 62, 0.3);
}

button#btn12:hover {
    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
    box-shadow: 0 8px 15px rgba(229, 62, 62, 0.4);
}
'''

with open(os.path.join(dir_path, 'HOME', 'project.css'), 'w', encoding='utf-8') as f:
    f.write(home_css)
print('Updated HOME/project.css')
