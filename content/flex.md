---
title: "Using Flex"
date: 2019-02-17T17:56:46-05:00
menu: main
---

<h1>Using flex classes for columns</h1>
<section class="reveal">
    <h3>Using class ".flex" with divs inside without class</h3>
    <div class="flex">
        <div><p class="bg-g br-4 pa-1">Area One</p></div>
        <div><p class="bg-dg br-4 pa-1">Area Two</p></div>
        <div><p class="bg-g br-4 pa-1">Area Three</p></div>
        <div><p class="bg-dg br-4 pa-1">Area Four</p></div>
        <div><p class="bg-g br-4 pa-1">Area Five</p></div>
    </div>
</section>
<hr class="mv-3">
<section class="reveal">
    <h3>Using class ".flex-1-2"</h3>
    <div class="flex">
        <div class="flex-1-2"><p class="bg-g br-4 pa-1">Flex 1-2</p></div>
        <div class="flex-1-2"><p class="bg-g br-4 pa-1">Flex 1-2</p></div>
        <div class="flex-1-2"><p class="bg-g br-4 pa-1">Flex 1-2</p></div>
        <div class="flex-1-2"><p class="bg-g br-4 pa-1">Flex 1-2</p></div>
    </div>
</section>
<hr class="mv-3">
<section class="reveal">
    <h3>Using class ".flex-1-3"</h3>
    <div class="flex">
        <div class="flex-1-3"><p class="bg-g br-4 pa-1">Flex 1-3</p></div>
        <div class="flex-1-3"><p class="bg-g br-4 pa-1">Flex 1-3</p></div>
        <div class="flex-1-3"><p class="bg-g br-4 pa-1">Flex 1-3</p></div>
        <div class="flex-1-3"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium. Feugiat in ante metus dictum at tempor commodo ullamcorper. Adipiscing elit ut aliquam purus sit amet luctus. Sed vulputate odio ut enim blandit volutpat. Adipiscing bibendum est ultricies integer. Pellentesque dignissim enim sit amet.</p></div>
        <div class="flex-1-3"><p>Sodales neque sodales ut etiam sit amet. Turpis tincidunt id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas sed. Sit amet est placerat in egestas erat imperdiet sed. Neque egestas congue quisque egestas diam in arcu cursus. Faucibus et molestie ac feugiat sed lectus vestibulum mattis.</p></div>
        <div class="flex-1-3"><p>Proin libero nunc consequat interdum varius. Pellentesque massa placerat duis ultricies. Habitasse platea dictumst vestibulum rhoncus est. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sed adipiscing diam donec adipiscing tristique risus nec.</p></div>
    </div>
</section>
<hr class="mv-3">
<section class="reveal">
    <h3>Using class ".flex-1-4"</h3>
    <div class="flex">
        <div class="flex-1-4"><p class="bg-g br-4 pa-1">Flex 1-4</p></div>
        <div class="flex-1-4"><p class="bg-g br-4 pa-1">Flex 1-4</p></div>
        <div class="flex-1-4"><p class="bg-g br-4 pa-1">Flex 1-4</p></div>
        <div class="flex-1-4"><p class="bg-g br-4 pa-1">Flex 1-4</p></div>
        <div class="flex-1-4"><p class="bg-g br-4 pa-1">Flex 1-4</p></div>
        <div class="flex-1-2"><p class="bg-g br-4 pa-1">Flex 2-4</p></div>
        <div class="flex-1-4"><p class="bg-g br-4 pa-1">Flex 1-4</p></div>
        <div class="flex-1-4"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium. Feugiat in ante metus dictum at tempor commodo ullamcorper. Adipiscing elit ut aliquam purus sit amet luctus. Sed vulputate odio ut enim blandit volutpat. Adipiscing bibendum est ultricies integer. Pellentesque dignissim enim sit amet.</p></div>
        <div class="flex-1-4"><p>Sodales neque sodales ut etiam sit amet. Turpis tincidunt id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas sed. Sit amet est placerat in egestas erat imperdiet sed. Neque egestas congue quisque egestas diam in arcu cursus. Faucibus et molestie ac feugiat sed lectus vestibulum mattis.</p></div>
        <div class="flex-1-4"><p>Proin libero nunc consequat interdum varius. Pellentesque massa placerat duis ultricies. Habitasse platea dictumst vestibulum rhoncus est. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sed adipiscing diam donec adipiscing tristique risus nec.</p></div>
        <div class="flex-1-4"><p>Sodales neque sodales ut etiam sit amet. Turpis tincidunt id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas sed. Sit amet est placerat in egestas erat imperdiet sed. Neque egestas congue quisque egestas diam in arcu cursus. Faucibus et molestie ac feugiat sed lectus vestibulum mattis.</p></div>
    </div>
</section>

<script>
    ScrollReveal().reveal('.reveal', { easing: 'ease-in-out', duration: '500', delay: '500', scale: 0.85 });
</script>