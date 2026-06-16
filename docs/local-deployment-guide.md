# Local Deployment Guide

## Overview

This guide demonstrates how to deploy the Wanderlust project on local infrastructure using a kubeadm-based Kubernetes cluster.

The deployment was validated using two virtual machines.

## Infrastructure

### VM-1

* 8 GB RAM
* 80 GB Storage

Components:

* Jenkins
* SonarQube
* OWASP Dependency Check
* Trivy
* Docker
* Kubernetes Control Plane

### VM-2

* 6 GB RAM
* 50 GB Storage

Components:

* Kubernetes Worker Node
* ArgoCD
* Prometheus
* Grafana

## Deployment Flow

Developer

↓

GitHub

↓

Jenkins

↓

OWASP Dependency Check

↓

SonarQube Analysis

↓

Trivy Scan

↓

Docker Build

↓

Docker Hub

↓

ArgoCD

↓

Kubernetes

↓

Prometheus

↓

Grafana

## Notes

This deployment approach is intended for learning, portfolio projects, and home-lab environments.

## Acknowledgement

The original Wanderlust project was created by Londhe Shubham. This guide documents a local infrastructure deployment strategy.
