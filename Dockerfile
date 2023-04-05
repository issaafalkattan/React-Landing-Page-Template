FROM node:14-slim

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json ./ 

# Install dependencies using Yarn
RUN yarn install

# Copy app to working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app 
CMD ["yarn", "start"]
