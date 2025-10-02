---
title: 'Laravel: La función "data_get()" recupera un valor de un array u objeto anidado usando la notación de punto'
description: 'La función data_get() recupera valores de arreglos u objetos anidados usando notación de puntos y comodines en Laravel.'
pubDate: 'Aug 20 2025'
heroImage: '../../assets/images/laravel.jpg'
tags: ['Laravel', 'PHP', 'snippets']
category: 'Snippets'
author: 'fabrizio'
authorImage: 'https://ecoding.dev/storage/images/efWuGM876akUe8gx4ZDITfCbv0fnrag8gQcSgs21.jpg'
authorUrl: 'https://ecoding.dev/@f4brizio'
---

*La función "data_get()" recupera un valor de un array u objeto anidada usando la notación de punto.*

```jsx
$data = [
    'songs' => [
        'sugar' => [
            'spotify' => 'https://open.spotify.com/track/2iuZJX9X9P0GKaE93xcPjk?si=24c26ac798b84c37',
            'video' => 'https://www.youtube.com/watch?v=09R8_2nJtjg',
        ],
        'the-scientist' => [
            'video' => 'https://www.youtube.com/watch?v=RB-RcX5DS5A',
       ],
    ]
];
```

```jsx
# Apuntar a cualquier clave del array u objeto
$allTrailers = data_get($data, 'songs.*.video');
```

```jsx
# Tráiler de la película interestelar
$trailer = data_get($data, 'songs.sugar.spotify');
```

```jsx
# Valor si no se encuentra la clave especificada.
$imdb data_get($data, 'songs.the-scientist.spotify', 'No encontrado');
```