# @app.route('/post', methods=['GET','POST'])
# def post():
#     if request.method == 'POST':
#         value = request.form['id_name']
#         value = str(value)
#         print(value)
#     return render_template('index.html')


from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    import os
    angry_path = 'angry'
    happy_path = 'happy'
    neutral_path = 'neutral'
    angry_file = os.listdir(angry_path)
    happy_file = os.listdir(happy_path)
    neutral_file = os.listdir(neutral_path)
    angry_num = str(len(angry_file))
    happy_num = str(len(happy_file))
    neutral_num = str(len(neutral_file))
    return render_template('index.html', 
            angry_num = angry_num, happy_num = happy_num, neutral_num = neutral_num)



if __name__=='__main__':
    app.run()