---
title: "Contact"
date: 2019-02-09T13:43:51-05:00
menu: main
weight: 30
description: "Meta Description about the Contact Page"
---

<h1>Let's Connect</h1>

<form action="">
    <div class="flex">
        <div class="flex-1-2">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required="true">
        </div>
        <div class="flex-1-2">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required="true">
        </div>
    </div>
    <label for="message">Message</label>
    <textarea cols="30" rows="4" name="message" id="message" required="true"></textarea>
    <button class="round">
        <input type="submit" value="Get In Touch">
    </button>
</form>