# Monitoring Guide

## Prometheus

Prometheus is responsible for collecting metrics from:

* Kubernetes Nodes
* Pods
* Namespaces
* Cluster Components

Verify targets:

```bash
kubectl get servicemonitor -A
```

## Grafana

Grafana is used to visualize cluster metrics.

Recommended Dashboards:

| Dashboard                     | ID   |
| ----------------------------- | ---- |
| Node Exporter Full            | 1860 |
| Kubernetes Cluster Monitoring | 315  |
| Kubernetes Pods               | 6417 |

## Monitoring Stack

Prometheus
↓
Grafana

## Acknowledgement

Monitoring configuration was implemented as part of the local infrastructure adaptation of the original Wanderlust project.
