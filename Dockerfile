FROM node:0.10

MAINTAINER Sean Emmer, sean.emmer@gmail.com

WORKDIR /home/sde

# Install Mean.JS Prerequisites
RUN npm install -g gulp-cli
RUN npm install -g bower

# Install Mean.JS packages
ADD package.json /home/sde/package.json
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /home/mean/.bowerrc
ADD bower.json /home/sde/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /home/sde

# Set production environment as default
ENV NODE_ENV production

# Port 8443 for server
EXPOSE 8443
CMD ["gulp", "prod"]
