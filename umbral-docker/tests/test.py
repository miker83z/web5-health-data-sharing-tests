import requests

node_url = 'http://localhost:8022'

plaintext = 'Hello World!'

#alice = requests.get(node_url+"/stateless/keypair", timeout=None)
#signer = requests.get(node_url+"/stateless/signer", timeout=None)
#bob = requests.get(node_url+"/stateless/keypair", timeout=None)

alice = requests.get(node_url+"/stateless/keypair", timeout=None).json()
signer = requests.get(node_url+"/stateless/signer", timeout=None).json()
bob = requests.get(node_url+"/stateless/keypair", timeout=None).json()

print(alice)
print(signer)
print(bob)
