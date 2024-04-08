# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from flask_mail import Mail, Message
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)


# projects_data = [
#     {"id": 1, "title": "Project 1", "description": "Description for Project 1"},
#     {"id": 2, "title": "Project 2", "description": "Description for Project 2"},
#     {"id": 3, "title": "Project 3", "description": "Description for Project 3"}
# ]

# videos_data = [
#     {"id": 1, "title": "Video 1", "url": "https://www.example.com/video1"},
#     {"id": 2, "title": "Video 2", "url": "https://www.example.com/video2"}
# ]

# supporters_data = [
#     {"id": 1, "name": "Supporter 1", "logo": "https://www.example.com/logo1.png"},
#     {"id": 2, "name": "Supporter 2", "logo": "https://www.example.com/logo2.png"}
# ]

# @app.route('/api/projects')
# def get_projects():
#     return jsonify(projects_data)

# @app.route('/api/video')
# def get_video_url():
#     video_url = 'https://example.com/video.mp4'  # Replace with the actual URL of your video
#     return jsonify({'url': video_url})

# @app.route('/api/logo-slider')
# def get_logo_slider_images():
#     # Assuming you have a list of image URLs stored in a variable named `image_urls`
#     image_urls = [
#         'https://example.com/image1.png',
#         'https://example.com/image2.png',
#         'https://example.com/image3.png',
#         'https://example.com/image4.png',
#         'https://example.com/image5.png'
#     ]
#     return jsonify({'image_urls': image_urls})







from flask import Flask, request, jsonify
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure mail settings
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  
app.config['MAIL_PORT'] = 587  
app.config['MAIL_USE_TLS'] = True  
app.config['MAIL_USERNAME'] = 'farhanhere8789@gmail.com' 
app.config['MAIL_PASSWORD'] = 'your-password'  

mail = Mail(app)

# Route to handle form submission
@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    data = request.form

    # Send email
    msg = Message('New Contact Form Submission',
                  sender='your_email@gmail.com',  
                  recipients=['your_email@gmail.com']) 
    msg.body = f"Name: {data['Name']}\nLast Name: {data['Last Name']}\nMobile No.: {data['Mobile no']}\nEmail: {data['email']}\nMessage: {data['message']}"
    mail.send(msg)

    return jsonify({"message": "Contact information submitted successfully!"})

if __name__ == '__main__':
    app.run(debug=True)

