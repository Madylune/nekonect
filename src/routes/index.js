export const getPath = (routeName, params = {}) => {
  switch (routeName) {
    case 'home':
      return '/'
    case 'kitchen':
      return '/kitchen'
    case 'toilet':
      return '/toilet'
    case 'bathroom':
      return '/bathroom'
    case 'garden':
      return '/garden'
    case 'dancefloor':
      return '/dancefloor'
    case 'store':
      return '/store'
    case 'settings':
      return '/settings'
    case 'night':
      return '/night'
    default:
      return routeName
  }
}

export default {}
