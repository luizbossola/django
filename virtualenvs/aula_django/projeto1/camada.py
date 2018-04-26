import psycopg2
str_connect=("dbname = 'luiz' user= 'user' host= 'localhost' port= '5432' password= 'user'")
#str_connect=("dbname = %s user= %s host= %s password= %s")%('desenvolvimento2018 ','postgres','200.17.225.171','usuarioOGL')
sql = """SELECT lim_municipio_a.nome FROM lim_municipio_a WHERE lim_municipio_a.nome='Sapucaia'"""

conn = psycopg2.connect(str_connect)
cur = conn.cursor()
cur.execute(sql)
if (cur.rowcount == 0):
    dados=0
else:
    dados= cur.fetchmany()
    print dados[0]

    cur.close()
    conn.commit()
    conn.close()
