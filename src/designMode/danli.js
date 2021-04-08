function SetManager(name) {
  this.manager = name
}

SetManager.prototype.getName = function() {
  console.log(this.manager)
}

var SingletoSetManager = (function() {
  var manager = null
  return function(name) {
    if (!manager) {
      manager = new SetManager(name)
    }
    return manager
  }
})()

SingletoSetManager('a').getName()
SingletoSetManager('b').getName()
SingletoSetManager('c').getName()