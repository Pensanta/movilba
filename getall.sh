#!/bin/bash

temp_file=$(mktemp)

# Add timestamp as the first line
echo "### Timestamp: $(date) ###" >> $temp_file

# List directory tree excluding "node_modules", "dist", ".git", and ".vite"
tree -I "node_modules|dist|.git|.vite" >> $temp_file

# Append content of relevant files, excluding node_modules, dist, .git, and .vite
find . \( -path ./node_modules -o -path ./dist -o -path ./.git -o -path ./.vite \) -prune -false -o -type f \
    \( -iname "*.html" -o -iname "*.js" -o -iname "*.jsx" -o -iname "*.css" \
    -o -iname "*.json" -o -iname "*.handlebars" \) \
    ! -iname "package-lock.json" | while read -r file
do
    echo "### File: $file ###" >> $temp_file
    cat "$file" >> $temp_file
done

gedit "$temp_file" && rm "$temp_file"

