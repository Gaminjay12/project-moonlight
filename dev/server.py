from livereload import Server, shell
server = Server()
server.watch("index.html")
server.watch("js/*")
server.watch("css/*")
server.serve(root='.', port='8080')