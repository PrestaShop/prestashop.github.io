---
layout: post
title: "PrestaShop Developer Conference 2025 Filmed Sessions - Modern Development Practices and Architecture"
subtitle: "Key insights and practical takeaways from PrestaShop's technical sessions"
date: 2026-01-16
authors: [ coffrep ]
icon: icon-leaf
tags: [psdevcon, news, event]
---

The PrestaShop Developer Conference took place a few months ago: last week, we've started publishing a series of blog posts diving into the event's sessions, sharing insights and key takeaways with you. We are continuing the series with another spotlight on modern development practices and architectural approaches.

If you missed the event or want to revisit the key moments, we've made all sessions available on PrestaShop’s [YouTube channel](https://www.youtube.com/watch?v=4vavpAx3MdY&list=PLyZYn1MMU7-zV2l3LNEQh78Fjp83ip_Da).

From automated deployment strategies to innovative module architecture patterns, the talks provide practical knowledge you can immediately apply to your projects. Let's dive into the key takeaways from each session.

## Streamlining Deployments with Deployer

[![Automated Deployment with Deployer](https://img.youtube.com/vi/pYJhqWNwyy8/0.jpg)](https://www.youtube.com/watch?v=pYJhqWNwyy8)

Ivan Ramirez (Chief Technology Officer, KIWIK) and Jérémie Legrand (Lead Developer and IT Architect, KIWIK) share their hands-on experience implementing automated deployment with Deployer, addressing the real-world challenges that many development teams face. Their talk covers critical technical hurdles including translation management, asset handling, and module-specific deployment issues.

The speakers provide valuable insights on managing module updates while maintaining deployment flexibility for production environments. They also tackle the complex challenge of version and theme fragmentation.

This session is essential viewing for teams looking to reduce deployment friction and establish reliable automated processes without sacrificing the agility needed for quick production fixes.

## Rethinking Module Architecture with Modern Symfony Principles

[![What if we structured our modules differently?](https://img.youtube.com/vi/HAz_Beg3p-8/0.jpg)](https://www.youtube.com/watch?v=HAz_Beg3p-8&t=49s)

Arnaud Scoté is PHP Symfony Developer / PrestaShop Ecommerce Expert at Griiv: during the event, Arnaud presents a fresh approach to module design that aligns with contemporary Symfony development practices. His methodology focuses on leveraging services and creating dedicated classes for hook calls, significantly improving code readability and maintainability.

The session then demonstrates how to implement SOLID principles. Arnaud also introduces a base abstract class concept that can serve as a foundation for robust module development.

This talk is particularly valuable for developers looking to modernize their module architecture and adopt best practices that will make their code more scalable and easier to maintain over time.

## PrestaFlow: Automated Testing Framework

[![PrestaFlow: automated testing framework](https://img.youtube.com/vi/iSdFNKe1EOw/0.jpg)](https://www.youtube.com/watch?v=iSdFNKe1EOw&t=34s)

Jonathan Danse, PrestaShop Developer and Designer at PrestaEdit, introduces PrestaFlow, an open source automated testing framework that became publicly available in August 2025. The presentation covers the framework's philosophy and ecosystem, demonstrating its practical application through a live demo on an existing store.

The session showcases how PrestaFlow can accelerate production deployments while significantly reducing regression risks. 

For teams struggling with manual testing bottlenecks or seeking to improve their continuous integration processes, this session offers a practical solution with immediate implementation potential.

## Evolution of Infrastructure as Code at PrestaShop

[![Infrastructure as Code Evolution](https://img.youtube.com/vi/ZcqLyd1UZqY/0.jpg)](https://www.youtube.com/watch?v=ZcqLyd1UZqY&t=46s)

Joseph Morin (DevOps, PrestaShop) and Claude-Arnaud Perrot (Lead DevOps, PrestaShop) provide an inside look at PrestaShop's infrastructure evolution, sharing lessons learned from their journey from basic Terraform deployments to a sophisticated Terragrunt-based architecture.

The presentation addresses the scalability challenges that emerged as PrestaShop's infrastructure grew and details the strategic decisions that led to their architectural refactoring. They share best practices encountered during this transition, providing valuable guidance for other organizations facing similar scaling challenges.

This session is valuable for DevOps professionals and technical leads responsible for infrastructure decisions, offering real-world insights from a successful large-scale infrastructure transformation.

## Building Enterprise-Grade ERP Connectors

[![ERP Integration Patterns](https://img.youtube.com/vi/0qm3HemQYHY/0.jpg)](https://www.youtube.com/watch?v=0qm3HemQYHY)

Mauricio Dinamarca, General Manager, Canal Cero, addresses one of the most challenging aspects of scaling PrestaShop stores: robust integration with enterprise ERP systems like BSale, Microsoft Dynamics, and SAP Business One. Drawing from Canal Cero's extensive implementation experience, he shares battle-tested patterns for building reliable, real-time synchronization systems.

The session covers critical architecture patterns for bi-directional synchronization, graceful handling of rate limits and failures, and queue management strategies for high-volume operations. Mauricio provides practical insights into testing complex integration scenarios and optimizing performance for large product catalogs.

Whether you're an agency serving your clients or managing your own large-scale store, this session delivers actionable strategies for building robust ERP integrations that scale reliably in production environments.


The sessions represent just a fraction of the valuable content from the PrestaShop Developer Conference 2025. Each talk provides practical, implementable solutions for common development challenges, backed by real-world experience from industry experts.
We encourage you to explore these sessions, share them with your team, and contribute to shaping the future of PrestaShop development.

