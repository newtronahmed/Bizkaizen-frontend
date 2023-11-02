import react from 'react'
import { List, Avatar, Button } from 'antd'
import { HiOutlineChevronUpDown } from 'react-icons/hi2'
const Profile = () => {
    return(
        <List
            itemLayout='horizontal'
        >
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src="http://localhost:8000/images/profile.jpg" />}
                    title={<span className='font-bold leading text-lg'>{"Steven "}</span>}
                    description={<span className='text-xs text-gray'>{"Manager"}</span>}
                />
                <div><Button icon={<HiOutlineChevronUpDown />} /></div>
            </List.Item>
        </List>
    )
}
export default Profile