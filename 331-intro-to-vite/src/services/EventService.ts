import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/PlermNichakorn/lab01_intro-vite/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getEvents(perPage: number, page: number): Promise<AxiosResponse<EventItem[]>> {
        return apiClient.get<EventItem[]>('/events?_limit' + perPage + '&_page='+page)
    },
    getEventById(id: number): Promise<AxiosResponse<EventItem>>{
        return apiClient.get<EventItem>('events/' +id.toString())
    }
}