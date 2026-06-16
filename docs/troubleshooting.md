# Troubleshooting Guide

## Jenkins Cannot Access Docker

```bash
sudo chmod 777 /var/run/docker.sock
```

## Worker Node Not Ready

```bash
journalctl -xeu kubelet
```

## ArgoCD Application OutOfSync

```bash
argocd app sync <application-name>
```

## Prometheus Targets Missing

```bash
kubectl get pods -n prometheus
```

## ServiceMonitor Not Detected

```bash
kubectl get servicemonitor -A
```

## Acknowledgement

These troubleshooting notes were collected while deploying the Wanderlust project on local infrastructure.
