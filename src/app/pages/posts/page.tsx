import {getPosts} from '../../../services/userService'

export default async function page() {
    const res = await getPosts()
    const posts = res.data
  return (
    <div>
        <ul>
            {posts.map((post) => (
                <li key={post.id}><h1>{post.title}</h1></li>
            ))}
        </ul>
    </div>
  )
}
