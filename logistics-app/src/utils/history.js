/**
 * Created by Jasmine on 2018/6/27.
 */
const createHistory = require('history').createBrowserHistory;

module.exports = createHistory();


// Push a new entry onto the history stack.
//history.push('/home')

// Push a new entry onto the history stack with a query string
// and some state. Location state does not appear in the URL.
//history.push('/home?the=query', { some: 'state' })

// If you prefer, use a single location-like object to specify both
// the URL and state. This is equivalent to the example above.
//history.push({
//    pathname: '/home',
//    search: '?the=query',
//    state: { some: 'state' }
//})

// Go back to the previous history entry. The following
// two lines are synonymous.
//history.go(-1)
//history.goBack()