import { db } from '@/app/main'
import { RootState } from '@/app/store/store'
import type { IMessage } from '@/shared/model/types/user'
import { addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const Message = () => {
	const {user} = useSelector((state: RootState) => state.user)
	const [messages, setMessages] = useState<IMessage[]>([])
	const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "messages"), (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as IMessage[];
            setMessages(msgs);
        });
        return () => unsub();
    }, [])

	const addMessageHandler = async () => {
			try {
				await addDoc(collection(db, "messages"), {
					user, message, createdAt: serverTimestamp()
				})
				setMessage('')
			} catch {
				console.log("error")	
			}
	}

const sortedMessages = [...messages].sort((a, b) => {
    const timeA = a.createdAt?.seconds || 0;
    const timeB = b.createdAt?.seconds || 0;
    return timeA - timeB; 
});

  return <div className='max-h-96 h-full overflow-scroll'>
		<div>
			<div className='flex-1 overflow-y-auto'>
        {sortedMessages.map(msg => (
            <div key={msg.id} className={`py-2 border-2 ${msg.user.id === user?.id ? "text-right text-green-500" : "text-red-500"}`}>
                <div>{msg.message}</div>
                <div>{msg.user.email || msg.user.name}</div>
            </div>
        ))}
			</div>
			<div>
				<input type="text" className='border-2 border-black' onChange={(e) => setMessage(e.target.value)} value={message} />
				<button onClick={addMessageHandler}>Отправить</button>
			</div>
		</div>
	</div>;
};
