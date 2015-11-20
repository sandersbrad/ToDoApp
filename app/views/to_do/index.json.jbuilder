json.array! @todos do |todo|
  todo.extract! todo, *todo.attributes.keys
end
