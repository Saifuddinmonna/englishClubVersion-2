# Create necessary directories if they don't exist
$directories = @(
    "public/images",
    "public/documents",
    "src/assets/css",
    "src/assets/fonts",
    "src/pages",
    "src/components"
)

foreach ($dir in $directories) {
    New-Item -ItemType Directory -Force -Path $dir
}

# Copy images to public folder for direct access
Copy-Item -Path "../EnglishClub/images/*" -Destination "public/images/" -Recurse -Force

# Copy documents to public folder for direct access
Copy-Item -Path "../EnglishClub/documents/*" -Destination "public/documents/" -Recurse -Force

# Copy font file
Copy-Item -Path "../EnglishClub/SutonnyMJ Regular.ttf" -Destination "src/assets/fonts/" -Force

# Copy CSS files
Copy-Item -Path "../EnglishClub/style.css" -Destination "src/assets/css/" -Force

# Copy HTML files to convert them to React components later
$htmlFiles = @(
    "index.html",
    "verb.html",
    "paragraph .html",
    "Tense in one page.html",
    "Case.html",
    "Auxiliary verb.html"
)

# Create pages directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "src/pages/html-backup"

foreach ($file in $htmlFiles) {
    if (Test-Path "../EnglishClub/$file") {
        Copy-Item -Path "../EnglishClub/$file" -Destination "src/pages/html-backup/" -Force
    }
} 