---
layout: post
title:  "Everything you always wanted to know about PrestaTrust"
subtitle: "Introducing the first Trust Label for PrestaShop modules"
date:   2017-12-13 09:10:11
authors: [ margauxchoplin ]
icon: icon-daft-punk
tags:
 - module
 - development
---

It allows to authenticate the code of modules and to safely keep track of the sales data in the blockchain.

![PrestaTrust Ethereum](/assets/images/2017/12/PrestaTrust_Ethereum.png)


In the upcoming 1.7.3 version, we will release a new option for PrestaShop modules called PrestaTrust. This is one of the most innovative projects, based on a technology which is still to discover for a lot of people, a kind of mystery that makes great promises for the future of our world: the blockchain. 

PrestaShop has always been and will always be open source. Before proceeding any further, let’s clearly state that PrestaTrust is not DRM (Digital Rights Management). PrestaTrust is not an encryption system for modules. PrestaTrusted modules will not be encoded. PrestaTrust does not block the installation of any module. 

Now, you might wonder how we could create a Trust Label without restricting the core values of open source, such as transparency and decentralization. This is where comes the amazing concept of blockchain. 


<blockquote>The practical consequence […is…] for the first time, a way for one Internet user to transfer a unique piece of digital property to another Internet user, such that the transfer is guaranteed to be safe and secure, everyone knows that the transfer has taken place, and nobody can challenge the legitimacy of the transfer. The consequences of this breakthrough are hard to overstate.<br><br>Marc Andreessen, Inventor of the internet browser</blockquote>


### What for?

PrestaTrust creates a bond of trust between module developers and module users, by authenticating the code of the module and safely keeping track of its sales data in the blockchain.

Traceability is based on the Ethereum blockchain and guarantees **a secure and irrefutable authentication of open source code**. Module developers will be able to:
<ul>
  <li>build direct trust with their customers</li>
  <li>do support real customers and avoid doing support for not purchased module licences</li>
  <li>give access to module updates only to real module buyers</li>
  <li>increase their visibility thanks to the Trust Label stamped on their module</li>
</ul>

To run this decentralized blockchain app, the fee for module developers is an extra 0.8% commission on PrestaShop Addons on each sale of a *PrestaTrusted* module. 

For merchants, the service is free. This optional label that developers may use for their paying modules brings an additional trust and reassurance element, that makes PrestaTrusted modules more attractive.


### How did we build PrestaTrust?

Technically speaking, the goal is to be able to write down some key information happening on PrestaShop Addons in the blockchain. 

To do so, we have built an **API** to do the bridge between these two ecosystems, and **smart contracts** in charge of receiving the pieces of information in the Ethereum blockchain. 

So, on the one hand, there is PrestaShop Addons, allowing the commercial relationship between module developers and merchants. And on the other hand, there are PrestaTrust’s smart contracts, enriched automatically and forming the decentralized basis of the trust between module developers and merchants.

We chose to use the most stable public blockchain network, [Ethereum](https://www.ethereum.org), to build PrestaTrust. This choice does not imply the use of tokens and there is no need to mine other than the standard mining of the Ethereum blockchain. 


![PrestaTrust API](/assets/images/2017/12/PrestaTrust_API.png)


### How to PrestaTrust a module? 

For modules developers, the procedure is incorporated in the validation process of modules on PrestaShop Addons. The few steps will be detailed directly in the seller account as well as in the official documentation.


### What is the code added in PrestaShop 1.7.3?

For merchants, the value of PrestaTrust appears on their own local store. **This part is incorporated in the 1.7.3 version of PrestaShop’s core**, and will thus be available in stores running on 1.7.3 and later versions.  

The PrestaTrust Label will trigger a double control in the merchant’s store:
<ul>
  <li>a code check: when the module is installed on the store, a hash of this module is calculated and compared to the original one, in order to make sure no code change happened between purchase and installation</li>
  <li>a purchase licence check: the idea here is to browse the blockchain to verify that the licence corresponding to this store has been purchased</li>
</ul>
The double check will never block the installation, it will simply warn the merchant, so that he is aware of the ins and outs of this module installation. 


### What information will be accessible in the blockchain?

Let’s dig a bit deeper into the privacy details. We know it is a major issue, that’s why we want to tell you how we proceeded.

The module’s code is not displayed in the blockchain, only its hash, which is a signature. The module remains open source and is not encoded. 

The confidential purchase data (seller and buyer’s identities, name of the module) are only visible to the seller, the buyer and PrestaShop - as for regular purchases.

Lastly, the store associated to the purchase licence is recorded in the form of a hash, just like the module’s code, so that it’s not publicly identifiable. 

So in a nutshell: be sure that PrestaTrust does not display any confidential data in the blockchain.


### Will there be a Preston Coin?

PrestaTrust will be live in the next coming weeks, as a first version which will serve as a basis for later improvements. We have not created any coin yet, but we can imagine the use of coins in the future for further features. We would be glad to hear your ideas on this subject. 

Keep in mind that PrestaTrust development is still on its way and it will keep on evolving with you. Feel free to comment and share your thoughts or ideas.
