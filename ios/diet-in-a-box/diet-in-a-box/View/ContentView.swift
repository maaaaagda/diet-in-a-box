//
//  ContentView.swift
//  diet-in-a-box
//
//  Created by Oleksandr Filippov on 28/10/2019.
//  Copyright © 2019 Oleksandr Filippov. All rights reserved.
//

import SwiftUI


struct ContentView: View {
    @State private var username: String = ""
    @State private var password: String = ""
    
    var body: some View {
        ZStack {
            Color(red:0.09, green:0.63, blue: 0.52)
                .edgesIgnoringSafeArea(.all)
            VStack(alignment: .center, spacing: 10) {
                Text("Username:").font(.headline).foregroundColor(.white)
                TextField("username", text: $username)
                    .frame(width:300, height: 30)
                    .foregroundColor(.black)
                    .background(Color.white)
                
                Text("Password:").font(.headline).foregroundColor(.white)
                TextField("password", text: $password)
                    .frame(width:300, height: 30)
                    .foregroundColor(.black)
                    .background(Color.white)
                
                Button(action: {
                    print("\(self.username) and \(self.password)")
                }){
                    HStack(){
                        Text("Login")
                            .font(.headline)
                            .frame(width:200, height: 30)
                        
                    }
                }.background(Color.white)
                    .cornerRadius(5.0).padding(.horizontal, 40)
            }
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
