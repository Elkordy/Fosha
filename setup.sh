#!/bin/bash

# Update and upgrade the system
sudo dnf update -y

# Install necessary packages
sudo dnf install -y \
    curl \
    wget \
    git \
    java-17-openjdk-devel

# Install Docker
sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
sudo dnf install -y docker-ce docker-ce-cli containerd.io

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Add current user to the docker group
sudo usermod -aG docker ${USER}

# Verify Docker installation
docker --version