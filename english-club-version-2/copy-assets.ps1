# Create necessary directories
New-Item -ItemType Directory -Force -Path "public/images"
New-Item -ItemType Directory -Force -Path "public/documents"

# Copy images
Copy-Item -Path "../EnglishClub/images/*" -Destination "public/images/" -Recurse -Force

# Copy documents
Copy-Item -Path "../EnglishClub/documents/*" -Destination "public/documents/" -Recurse -Force 