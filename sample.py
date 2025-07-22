import os

# Define project name
project_name = "auth_system_project"

# Define folder structure
structure = {
    project_name: [
        "backend",       # Django project will be initialized here
        "frontend",      # React app will be created here
        "deployment",    # AWS setup scripts and configs
        "docs",          # For future documentation
    ],
    os.path.join(project_name, "backend"): [
        "auth_app",      # Custom Django app for authentication
        "core",          # To store core settings, middlewares, etc.
    ],
    os.path.join(project_name, "frontend"): [
        "public",
        "src",
        os.path.join("src", "components"),
        os.path.join("src", "pages"),
        os.path.join("src", "services"),  # For API calls
        os.path.join("src", "utils"),     # For helper functions
    ]
}

# Function to create folders
def create_structure(structure):
    for parent, children in structure.items():
        os.makedirs(parent, exist_ok=True)
        for child in children:
            path = os.path.join(parent, child)
            os.makedirs(path, exist_ok=True)
            print(f"Created: {path}")

# Run the function
create_structure(structure)
print("\n✅ Project structure initialized successfully.")
