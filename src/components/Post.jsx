import { Card, Avatar } from 'antd'

export default function Post({ post }) {
  return (
    <Card
    hoverable
      style={{ width: 300 }}
      cover={
        <img alt={post.description} src={post.photo}></img>
      }
    >
      <Card.Meta 
      avatar={<Avatar src="https://randomuser.me/api/portraits/women/6.jpg"/>}
      title={post.username}
      description={post.description}
      />
    </Card>
  )
}