# Rangkuman Pembelajaran Materi React Hooks

## Introduction Reack Hooks
Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat mmenggunakan state dan fitur react yang lain tanpa perlu menulis sebuah kelas. 

Motivasi menggunakan react hooks
- kesulitan untuk menggunakan kembali stateful logic antar komponen
- komponen kompleks menjadi sulit untuk dimengerti
- kelas membingungkan manusia dan mesin

Hooks pada react
1. Hooks dasar
   - useState
   - useEffect
   - useContext
2. Hooks tambahan
   - useReducer
   - useCallback
   - useMemo
   - useRef
   - useImperativeHandle
   - useLayoutEffect
   - useDebugValue

Aturan pada hooks
- Hanya panggil hooks di tingkat atas
jangan memanggil hooks dari dalam loops, conditions, atau nested function
- Hanya panggil hooks dari fungsi-fungsi react
jangan memanggil hooks dari fungsi-fungsi javasript biasa. Kita dapat:
a. memanggil hooks dari kompoonen-komponen fungsi react
b. memanggil hooks dari custom hooks

## Implementasi useState & useEffect di Component
1. Menggunakan useState
cara mendeklarasikan variable state pada hooks, ketika menggunakan function component dideklarasikan seperti:

```import { useState } from 'react'```
```function Example() {```
```   const [count, setCount] = useState(0);```
```}```

Dengan kita memanggil useState, kita akan menyimpan suatu state dalam suatu variable. Dengan menggunnakan state kita bisa menjaga nilai antar pemanggilan fungsinya. Dengan menggunakan state, variable state akan dipertahankan react. Jadi ketika di render, valuenya akan tetap ada.

Yang dikembalikan useState adalah sepasang nilai 

```   const [count, setCount] = useState(0);```

yang di kiri adalah state saat ini, sedangkan yang kanan adalah fungsi untuk melakukan pembaruan. 

Cara membaca state pada hooks adalah dengan langsung memanggil state nya.

Cara melakukan pembaruan state yaitu dengan langsung memanggil fungsi pengubahnya yang didalamnya adalah value yang akan diubah. 

Tips: Menggunakan banyak variable state

2. Menggunakan useEffect
useEffect()
- Effect hook memungkinkan kita melakukan efek samping (side effects) di dalam function component
- componentDidMount, componentDidUpdate, dan componentWillUnmount =/mirip useEffect
- Ada dua jenis: Butuh pembersihan dan tidak butuh pembersihan

useEffect tanpa pembersihan:
- memperbarui DOM
- permintaan jaringan
- mutasi DOM secara manual
- pencatatan

useEffect dengan pembersihan:
contoh pada case dimana kita akan mengatur subscription ke beberapa eksternal data dan kita harus melakukan pembersihan agar mencegah kebocoran data. 

Tips: Mengoptimalkan performa dengan melewati effects

## Membuat Custom Hooks
Custom hooks yaitu membuat hook kita sendiri memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi. 