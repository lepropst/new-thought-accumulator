export async function localGet(path: String):Object {
    const res = await fetch(`http://localhost:3000/${path}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
   
  