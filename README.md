# Wanderlust Local DevSecOps & GitOps Project 🚀

![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)  ![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)  ![ArgoCD](https://img.shields.io/badge/ArgoCD-EF7B4D?style=for-the-badge&logo=argo&logoColor=white)  ![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)  ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)  ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)  ![SonarQube](https://img.shields.io/badge/SonarQube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white)  ![Trivy](https://img.shields.io/badge/Trivy-1904DA?style=for-the-badge)

Deploy a complete production-style DevSecOps + GitOps pipeline on local infrastructure without AWS.

This project demonstrates how to implement an end-to-end DevSecOps workflow using Jenkins, SonarQube, OWASP Dependency Check, Trivy, Docker, Kubernetes, ArgoCD, Prometheus, and Grafana on only two local virtual machines.

Perfect for:

* DevOps Beginners
* Students
* Home Lab Enthusiasts
* Interview Preparation
* Portfolio Building
* Cloud-Native Learning

---

## 📸 Project Preview


<img width="1536" height="1024" alt="Wnderlust-preview" src="https://github.com/user-attachments/assets/90fb5118-9f2b-436f-8325-e5c83982c9c1" />


---

# Project Deployment Flow


<img width="900" height="576" alt="DevSecOps_GitOps_Showcase_Enhanced" src="https://github.com/user-attachments/assets/d00d6f3f-5adf-4914-a8f6-a2b1a8e36418" />


---

## 🚀 Tech Stack Used

* GitHub (Source Code)
* Docker (Containerization)
* Jenkins (CI/CD)
* OWASP Dependency Check (Security Scanning)
* SonarQube (Code Quality)
* Trivy (Vulnerability Scanning)
* Kubernetes (Container Orchestration)
* ArgoCD (GitOps Deployment)
* Prometheus (Monitoring)
* Grafana (Visualization)

---

## 🏗 Infrastructure Layout

### VM-1 (DevSecOps Server)

| Resource | Configuration                                                      |
| -------- | ------------------------------------------------------------------ |
| RAM      | 8 GB                                                               |
| Storage  | 80 GB                                                              |
| Services | Jenkins, SonarQube, OWASP, Trivy, Docker, Kubernetes Control Plane |

---

### VM-2 (GitOps & Monitoring Server)

| Resource | Configuration                                  |
| -------- | ---------------------------------------------- |
| RAM      | 6 GB                                           |
| Storage  | 50 GB                                          |
| Services | Kubernetes Worker, ArgoCD, Prometheus, Grafana |

---

## 📐 Architecture Diagram

> Add architecture diagram here

VM1
 ├ Jenkins
 ├ SonarQube
 ├ Docker
 └ K8s Control Plane

VM2
 ├ Worker Node
 ├ ArgoCD
 ├ Prometheus
 └ Grafana

---

## 🔄 Complete CI/CD Flow

```text
Developer
     │
     ▼
 GitHub Repository
     │
     ▼
 Jenkins Pipeline
     │
     ├── OWASP Dependency Check
     │
     ├── SonarQube Analysis
     │
     ├── Trivy Scan
     │
     ▼
 Docker Build
     │
     ▼
 Docker Hub
     │
     ▼
 Manifest Update
     │
     ▼
 ArgoCD Sync
     │
     ▼
 Kubernetes Deployment
     │
     ▼
 Prometheus Monitoring
     │
     ▼
 Grafana Dashboard
```

---

## 📌 Infrastructure Overview

```text
VM-1 (8GB RAM / 80GB Storage)

├── Jenkins        : 8080
├── SonarQube      : 9000
├── Docker
├── OWASP
├── Trivy
└── Kubernetes Control Plane


VM-2 (6GB RAM / 50GB Storage)

├── ArgoCD
├── Prometheus
├── Grafana
└── Kubernetes Worker
```

---

# Project Screenshots

## Jenkins Dashboard


<img width="3198" height="1834" alt="image" src="https://github.com/user-attachments/assets/2e540b97-8f8f-45f4-90c9-63834b5b5074" />


---

## Jenkins Successful Pipeline



<img width="3174" height="1906" alt="image" src="https://github.com/user-attachments/assets/75bab628-6c7e-481b-93ca-2edf3f796538" />
<img width="3162" height="1901" alt="image" src="https://github.com/user-attachments/assets/e156156e-083f-4e35-8ca4-e16b3cd4e527" />

<img width="3165" height="1899" alt="image" src="https://github.com/user-attachments/assets/fb491267-17e3-4155-a91d-bf3b2213e2e0" />
<img width="3163" height="1897" alt="image" src="https://github.com/user-attachments/assets/a875d92f-281b-4470-ac28-020e17b12716" />


---

## SonarQube Dashboard


<img width="3164" height="1900" alt="image" src="https://github.com/user-attachments/assets/06d45094-7c7d-4892-82ab-09973885c538" />

---

## SonarQube Quality Gate


<img width="3168" height="1909" alt="image" src="https://github.com/user-attachments/assets/fb257062-6a63-4f18-9c00-8fef46b6e3d0" />

---

## OWASP Dependency Check Report


<img width="3169" height="1906" alt="image" src="https://github.com/user-attachments/assets/896da8f9-6994-4687-bb2e-b5040ff951af" />

---

## Trivy Security Scan

<img width="3166" height="1900" alt="image" src="https://github.com/user-attachments/assets/98bd89a1-6114-4449-b49a-526e45ea9ab7" />

<img width="3172" height="1885" alt="image" src="https://github.com/user-attachments/assets/bc288d52-d558-48bd-9afc-567d362323ae" />


---

## Docker Images

<img width="3198" height="1316" alt="image" src="https://github.com/user-attachments/assets/8e10bfd1-87f1-4a88-882a-3ee65486e4f4" />


---

## Kubernetes Nodes

```bash
kubectl get nodes
```

<img width="3197" height="1323" alt="image" src="https://github.com/user-attachments/assets/12181b9e-cb01-4ad9-89a8-efa5e4d964d1" />


---

## Kubernetes Pods

```bash
kubectl get pods -A
```

<img width="3100" height="1165" alt="image" src="https://github.com/user-attachments/assets/975d2f36-a91d-4754-be2c-1dbb0424c19d" />


---

## ArgoCD Dashboard

<img width="3195" height="1907" alt="image" src="https://github.com/user-attachments/assets/e5041442-3e2a-471b-aa66-278359d7497a" />


---

## ArgoCD Application Sync


<img width="3165" height="1901" alt="image" src="https://github.com/user-attachments/assets/b677c00b-d7cf-441f-834e-2681d92b9617" />


---


## Grafana Dashboard

<img width="3170" height="1895" alt="image" src="https://github.com/user-attachments/assets/6b0d0bbe-ada9-413d-ad99-b2c63f15e8b9" />


---

## Grafana Kubernetes Monitoring


<img width="3179" height="1894" alt="image" src="https://github.com/user-attachments/assets/17b5b310-840a-4a96-b13a-0d851eafcf41" />


---


# Installation Guide

## Step 1: Prepare Infrastructure

Create two virtual machines:

### VM-1

* 8 GB RAM
* 80 GB Storage

### VM-2

* 6 GB RAM
* 50 GB Storage

Verify connectivity between both VMs.

```bash
ping <vm-ip>
```

---

## Step 2: Install Docker

```bash
sudo dnf install docker -y

sudo systemctl enable docker

sudo systemctl start docker
```

---

## Step 3: Install Kubernetes

Install:

* kubeadm
* kubelet
* kubectl

Initialize cluster:

```bash
kubeadm init
```

Join worker node:

```bash
kubeadm join ...
```

---

## Step 4: Install Jenkins

```bash
# Install Java 21

sudo dnf install -y fontconfig java-21-openjdk

# Verify the installation
java -version

# Add the Jenkins repository
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/rpm-stable/jenkins.repo

# Import the Jenkins GPG key
sudo rpm --import https://pkg.jenkins.io/rpm-stable/jenkins.io-2026.key

```

Install Jenkins and start service.

```bash
# Install Jenkins
sudo dnf install -y jenkins

# Start and enable Jenkins
sudo systemctl enable --now jenkins

# Check the status
sudo systemctl status jenkins
```

Configure Firewall

```bash
# Jenkins runs on port 8080 by default
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload

# Verify the port is open
sudo firewall-cmd --list-ports
```

Get the Initial Admin Paswword
```bash
# Display the initial admin password
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

---

## Step 5: Install SonarQube

```bash
docker run -d \
--name sonarqube \
-p 9000:9000 \
sonarqube:lts-community
```

---

## Step 6: Install OWASP Dependency Check

Configure through Jenkins plugin manager.

---

## Step 7: Install Trivy

```bash
cat << EOF | sudo tee -a /etc/yum.repos.d/trivy.repo
[trivy]
name=Trivy repository
baseurl=https://aquasecurity.github.io/trivy-repo/rpm/releases/\$basearch/
gpgcheck=1
enabled=1
gpgkey=https://aquasecurity.github.io/trivy-repo/rpm/public.key
EOF
sudo yum -y update
sudo yum -y install trivy
```

---

## Step 8: Install ArgoCD

```bash
kubectl create namespace argocd
```

```bash
kubectl apply -n argocd \
-f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

---

## Step 9: Install Prometheus

```bash
helm install prometheus prometheus-community/kube-prometheus-stack -n prometheus
```

---

## Step 10: Install Grafana

Installed as part of kube-prometheus-stack.

---

# Monitoring Setup

## Prometheus

Monitor:

* Nodes
* Pods
* Namespaces
* Cluster Components

---

## Grafana

Recommended Dashboards:

### Node Exporter Full

```text
1860
```

### Kubernetes Cluster Monitoring

```text
315
```

### Kubernetes Pods

```text
6417
```

---

# Security Checks Implemented

✅ OWASP Dependency Check

✅ SonarQube Code Analysis

✅ Trivy Filesystem Scan

✅ Trivy Docker Image Scan

---

# Learning Outcomes

After completing this project you will understand:

* Jenkins Pipelines
* Docker Containerization
* Kubernetes Deployment
* GitOps Workflows
* ArgoCD
* SonarQube Integration
* OWASP Dependency Check
* Trivy Security Scanning
* Prometheus Monitoring
* Grafana Dashboards
* Linux Administration
* DevSecOps Fundamentals

---

# Resume Skills Demonstrated

* DevOps
* DevSecOps
* GitOps
* CI/CD
* Docker
* Kubernetes
* Jenkins
* SonarQube
* OWASP
* Trivy
* ArgoCD
* Prometheus
* Grafana
* Linux
* Monitoring & Observability

---

# Troubleshooting

## Jenkins cannot access Docker

```bash
sudo chmod 777 /var/run/docker.sock
```

---

## Worker Node Not Joining Cluster

Check:

```bash
journalctl -xeu kubelet
```

---

## ArgoCD Application OutOfSync

```bash
argocd app sync <application-name>
```

---

## Prometheus Targets Down

```bash
kubectl get pods -n prometheus
```

---

# Future Improvements

* Multi-Node Kubernetes Cluster
* Harbor Registry
* Terraform Automation
* Ansible Automation
* Kubernetes Ingress Controller
* External DNS
* Cert Manager
* Loki
* Tempo
* OpenTelemetry

---

# Contributing

Contributions are welcome.

If you find improvements, open an issue or submit a pull request.

---

# Star The Repository ⭐

If this project helped you learn DevOps, DevSecOps, GitOps, and Kubernetes on local infrastructure, consider giving it a star.
