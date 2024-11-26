import { useState, useEffect } from "react"

export const getRandomWord = (words: string[])=>{
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}

export const useFetchWords = ()=>{
    const [winWord, setWinWord] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    

    useEffect(()=>{
        try {
            const fetchWords = async ()=>{
                setIsLoading(true)
                const response = await fetch("/api.json")
                const data = await response.json()
            setWinWord(getRandomWord(data.words))
                setIsLoading(false)
            }
            fetchWords()
        } catch(e){
            console.error("Error fetching words:", e)
            setError("Error fetching words")
        }
      
    }, [])

    return {winWord, isLoading, error}
}

