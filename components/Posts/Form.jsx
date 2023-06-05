import React from 'react'
import {useState} from 'react'
import useCurrentUser from '@/hooks/useCurrentUser'
import usePosts from '@/hooks/usePosts'
import useRegistrationModal from '@/hooks/useRegistrationModal'
import useLoginModal from '@/hooks/useLoginModal'
const Form = () => {
    const registerModal = useRegistrationModal();
    const loginModal = useLoginModal()
    const {currentUser} = useCurrentUser()
    const {mutate: mutatePosts} = usePosts()

    const [body, setBody] = useState('')
  return (
<div className='py-2 flex flex-col'>

</div>
  )
}

export default Form