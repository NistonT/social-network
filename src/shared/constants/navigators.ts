import { CircleUser, LayoutGrid, MessageCircle, Users, type LucideIcon } from 'lucide-react'

interface INavigator {
	id: number;
	name: string;
	href: string;
	icon?: LucideIcon;
}

export const navigators: INavigator[] = [
	{ id: 0, name: "Profile", href: "", icon: CircleUser },
	{ id: 1, name: "News", href: "/news", icon: LayoutGrid  },
	{ id: 2, name: "Messenger", href: "/msg", icon: MessageCircle },
	{ id: 3, name: "Friends", href: "/friends", icon: Users }
];