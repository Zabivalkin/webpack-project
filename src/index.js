import Post from '@models/Post'
import json from '@/assets/json'
import '@/styles/styles.css'
import '@/styles/scss.scss'

const post = new Post('Hello')
console.log(post.toString())
