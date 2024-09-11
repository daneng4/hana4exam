Array.prototype.sortBy = function (sortProp = '') {

  const sortOrders = sortProp.split(',').map(sortOrder => {
    const [prop, condition = 'asc'] = sortOrder.split(':');
    return {prop, condition : condition.toLowerCase() === 'desc' ? -1 : 1};
  });

  return this.sort((u1, u2) => {
    for(const order of sortOrders){
      const {prop, condition} = order;
      if(u1[prop] < u2[prop])
        return -1 * condition;
      if(u1[prop] > u2[prop])
        return 1 * condition;
    }
    return 0;
  });
};