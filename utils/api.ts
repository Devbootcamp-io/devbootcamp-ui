export default {
  /**
   * @todo
   * Get bootcamp list
   */
  getList(): Promise<any[]> {
    return fetch('/data.json').then(res => res.json())
  },

  /**
   * @todo
   * Get bootcamp detail by Id
   */
  getBootcamp(id: number): Promise<any> {
    return fetch('/data.json')
      .then(res => res.json())
      .then(res => res.find((bootcamp: any) => bootcamp.id === id))
  }
}
