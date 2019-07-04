export default {
  services: {
    fetchServices: () => fetch('../../data.json').then(res => res.json())
  }
};