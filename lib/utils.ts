import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const teamsList = [ 
    {
      id: 'team0',
      name: 'Convener',
      members: [
        { 
          name: 'Vishal Kumar',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8nbegVpKFvlWGTIAJSubDhEoNp9XPaV5xw4jy',
          heading: 'Vishal Kumar',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/vishal-kumar-gupta-b5a664252/' },
            { name: 'instagram', link: 'https://www.instagram.com/bitchaal/' },
            { name: 'email', link: 'B22339@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Aryan Kumar',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8EgnL0zqXyL9MO1q2nHQca6xPvFe7YNiRswgV',
          heading: 'Aryan Kumar',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/aryan0singh/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'email', link: 'B22236@students.iitmandi.ac.in' },
          ],
        },
      ], 
    },
    {
      id: 'team1',
      name: 'Secretary',
      members: [
        { 
          name: 'Ayush Sinha',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8HG0sJDWxhybz3vfeqLAQnpcSBWg6d54OMKiH',
          heading: 'Literary Secretary',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/ayush-sinha-iit-mandi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'https://instagram.com/cultureshock_poet' },
            { name: 'whatsapp', link: '7992323005' },
            { name: 'email', link: 'literary_secretary@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Vivek Aggarwal',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XSTLmChWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ',
          heading: 'Cultural Secretary',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/vivek-aggarwal-b005b125a/' },
            { name: 'instagram', link: 'https://www.instagram.com/vivekaggarwal05/' },
            { name: 'whatsapp', link: '7417899100' },
            { name: 'email', link: 'cultural_secretary@students.iitmandi.ac.in' },
          ],
        },
      ], 
    },
    {
      id: 'team2',
      name: 'Sponsorship Team ',
      members: [
        { 
          name: 'Ayan Garg',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8wPU7iBkN93fDJcmlrWoxYu8LRnVCHUMXgaki',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://linkedin.com/in/AyanGargAyanGarg' },
            { name: 'instagram', link: 'https://instagram.com/ayangarg2' },
            { name: 'whatsapp', link: '7756837945' },
            { name: 'email', link: 'ayangarg2005@gmail.com' },
          ],
        },
        { 
          name: 'Ayush Bhardwaj',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8GAYxcapvLvuzkRJai146Y2oZCN0Q3DmjflbH',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/ayush-bhardwaj01' },
            { name: 'whatsapp', link: '9877809383' },
            { name: 'email', link: 'b23199@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Hardeep Gupta',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8iO1pzvndrAuLZbPVFehBwa7QtcmkpnJoi6T1',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/hardeep-gupta-14ab7b337' },
            { name: 'instagram', link: 'https://instagram.com/hardeepgupta123' },
            { name: 'whatsapp', link: '9219602541' },
            { name: 'email', link: 'hardeepgupta2912@gmail.com' },
          ],
        },
      ],
    },
    {
      id: 'team3',
      name: 'Planning And Management Team',
      members: [
        { 
          name: 'Avishkar Chavan',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg85Wj3InUAUQ6YOXCtv3Fsqkif4u7ENMrxJenS',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/avishkarchavan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
            { name: 'instagram', link: 'https://instagram.com/avishkar_95' },
            { name: 'whatsapp', link: '8767757524' },
            { name: 'email', link: 'avishkarchavan55@gmail.com' },
          ],
        },
        { 
          name: 'Tushar Bhati',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XCV1kEhWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/tushar-bhati-632862318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
            { name: 'instagram', link: 'https://instagram.com/tusharbhatiiii' },
            { name: 'whatsapp', link: '9870226606' },
            { name: 'email', link: 'B23104@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Sujay Ghonshetwad',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8rY40s9FKczH6lU2AfYM4j8OCnVtxLuhdeWiG',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/sujay-ghonshetwad-233b89225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'https://instagram.com/itz_sujay_20' },
            { name: 'whatsapp', link: '8767430882' },
            { name: 'email', link: '20sujay04@gmail.com' },
          ],
        },
        { 
          name: 'Jaspinder kaur ',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg86rGX0YmwX9hA86oIV0kMUetRYfrxvLGNiHJa',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/jaspinder-kaur-ba33242a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'whatsapp', link: '9780771121' },
            { name: 'email', link: 'B23264@students.iitmandi.ac.in' },
          ],
        },
      ],
    },
    {
      id: 'team4',
      name: 'Development Team',
      members: [
        { 
          name: 'Piyush Kumar',
          photo: '/assets/team/piyush.jpeg',
          socialMediaLinks: [
          ],
        },
        // { 
        //   name: 'Pragyansh',
        //   photo: '/assets/team/pragyansh.png',
        //   socialMediaLinks: [
        //   ],
        // },
      ],
    },
    {
      id: 'team5',
      name: 'Publicity team ',
      members: [
        { 
          name: 'Deepansha Deora',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8DIPW1MtCGHb0TXgla6n8qNr1RxSKzEoJWwZy',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/deepansha-deora-27b8b4280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'https://instagram.com/deepansha_05' },
            { name: 'whatsapp', link: '97823 96590 ' },
            { name: 'email', link: '23deepansha@gmail.com' },
          ],
        },
        { 
          name: 'Gourav Chaudhary ',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8C1nGsyYrR4iUhtEkXzqNrGjSnf1ul85MDWvB',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/gourav-chaudhary-845a78344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'https://instagram.com/Chodry_gourav_22' },
            { name: 'whatsapp', link: '8278741047' },
            { name: 'email', link: 'b23370@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Namita Singh ',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8j3WZKKEvUlrMC78dNGSEnVcpPI96zhWaqeDy',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/namita-singh-b00346329' },
            { name: 'instagram', link: 'https://instagram.com/namitasingh14114' },
            { name: 'whatsapp', link: '9811197429' },
            { name: 'email', link: 'b22224@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Divyanshu Raj',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8duJobtD2zCVD9W0xXfbPgcFB8GtZ3ejKnmsO',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/divyanshu-raj-784306329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'whatsapp', link: '8797003838' },
            { name: 'email', link: 'b23438@students.iitmandi.ac.in' },
            { name: 'instagram', link: 'https://instagram.com/divyanshu_raj_2004' },
          ],
        },
      ],
    },
    {
      id: 'team6',
      name: 'Photography and Videography team',
      members: [
        { 
          name: 'Mankirat Singh Saini',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8UjpwyQc5DGBn1dJwk74IcaTePASLs3ofF6E8',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/mankirat-singh-saini-1695b81a4/' },
            { name: 'instagram', link: 'https://www.instagram.com/_mankirat_saini/' },
            { name: 'whatsapp', link: '9463553963' },
            { name: 'email', link: 'B23270@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Rohak Gupta',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg85O0JDPUAUQ6YOXCtv3Fsqkif4u7ENMrxJenS',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/rohak-gupta-04ab172b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'rohak_gupta' },
            { name: 'whatsapp', link: '9817157386' },
            { name: 'email', link: 'b23500@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Adit',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hjYjHfgiPInSsWU8AM03Hk6OVjE5NlYFoqrg',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/adit-raj-69925224a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'https://www.instagram.com/adit.raj_?igsh=MWg4b3lnMjdlbWJ1dA==' },
            { name: 'whatsapp', link: '9105555966' },
            { name: 'email', link: 'b23480@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Achintya Dixit',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8WKT2QbCiUtTqDvQ12xPwnlk7pVJeZcfi6r3B',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/achintya-dixit-302039328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'achintya_dixit_' },
            { name: 'whatsapp', link: '8839599733' },
            { name: 'email', link: 'achintyadixit2611@gmail.com' },
          ],
        },
      ],
    },
    {
      id: 'team7',
      name: 'Media team',
      members: [
        { 
          name: 'Aditya Sharma',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8jlfTs9EvUlrMC78dNGSEnVcpPI96zhWaqeDy',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/aditya-sharma-b71335289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'https://www.instagram.com/aditya_sh2606/profilecard/?igsh=MXF4Z2lpM3d1cDhzNA==' },
            { name: 'whatsapp', link: '7297938884' },
            { name: 'email', link: 'adityasha729@gmail.com' },
          ],
        },
        { 
          name: 'Monu Patil',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8jWhf8xEvUlrMC78dNGSEnVcpPI96zhWaqeDy',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/monu-patil-551a0b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'https://www.instagram.com/satyam.patil.7921/profilecard/?igsh=dTRwY3JoNGNnZTJn' },
            { name: 'whatsapp', link: '8603630993' },
            { name: 'email', link: 'b22052@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Aryan Kashyap',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8EgnL0zqXyL9MO1q2nHQca6xPvFe7YNiRswgV',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/aryan-kashyap-1953a3275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'https://www.instagram.com/_.aryankashyap/profilecard/?igsh=MXB5dzB6YWo5NThtaQ==' },
            { name: 'whatsapp', link: '9508050445' },
            { name: 'email', link: 'aryankashyap21a@gmail.com' },
          ],
        },
      ],
    },
    {
      id: 'team8',
      name: 'Content team',
      members: [
        { 
          name: 'Basil Khan',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8fZYU8mNnaGuQcUEXzIrigDtYvbPpyeAwZH8K',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/basil-khan-b7714b321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'Basilkhan78' },
            { name: 'whatsapp', link: '7668421823' },
            { name: 'email', link: 'b23353@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Harshit Kumar Singh',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8K8SLqMQ3y0NMqAiv1scShIQEJfUmRlp8G745',
          socialMediaLinks: [
            { name: 'linkedin', link: 'harshithi5' },
            { name: 'instagram', link: 'harshit_hi5' },
            { name: 'whatsapp', link: '7061671688' },
            { name: 'email', link: 'b23133@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Mohit',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8tY2XKQeeKLVcTXI7MJNPQraCYZ5iGjoEO9H8',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/mohit-b356172a5/' },
            { name: 'instagram', link: 'mohit_gothwal07' },
            { name: 'whatsapp', link: '8307133420' },
            { name: 'email', link: 'b23160@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Rishang Yadav',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg87R1Az05VgzrG1oD8Ky4Iwvx0LatSiTFCZ2Bh',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/yadavrishang?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'meson_197' },
            { name: 'whatsapp', link: '7906092262' },
            { name: 'email', link: 'b23173@students.iitmandi.ac.in' },
          ],
        },
      ],
    },
    {
      id: 'team9',
      name: 'Design team',
      members: [
        { 
          name: 'Sumit  Tiwari',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8GAqjVaqvLvuzkRJai146Y2oZCN0Q3DmjflbH',
          socialMediaLinks: [
            { name: 'linkedin', link: 'sumit tiwari' },
            { name: 'instagram', link: 'tiwariisumit' },
            { name: 'whatsapp', link: '6280909926' },
            { name: 'email', link: 'st5387262@gmail.com' },
          ],
        },
        { 
          name: 'Yash Kataria',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Nua9Uo0TBnmKsCY0o1ENRbLkZXIgjp3rfh6V',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/yash-kataria-6a3610284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'yash_k_.9' },
            { name: 'whatsapp', link: '9671611971' },
            { name: 'email', link: 'kyash4054@gmail.com' },
          ],
        },
        { 
          name: 'Pranjal',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8G9x2tFvLvuzkRJai146Y2oZCN0Q3DmjflbHw',
          socialMediaLinks: [
            { name: 'linkedin', link: 'Pranjal Rai' },
            { name: 'instagram', link: 'Pranjalol' },
            { name: 'whatsapp', link: '9821044361' },
            { name: 'email', link: 'B23022@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Prashashti',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8qr6kyjoQarxcF3UnTdD8M24buszJNjfgyh1p',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/prashasti-singh-5516a8288' },
            { name: 'instagram', link: ' https://www.instagram.com/prashasti._.x?igsh=MTY3bmo5em00anc3dQ%3D%3D&utm_source=qr' },
            { name: 'email', link: 'B22339@students.iitmandi.ac.in' },
          ],
        },
      ],
    },
    {
      id: 'team10',
      name: 'Decor team',
      members: [
        { 
          name: 'Ruchi',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8i3zUjT5ndrAuLZbPVFehBwa7QtcmkpnJoi6T',
          socialMediaLinks: [
            { name: 'linkedin', link: '' },
            { name: 'instagram', link: 'Ruchi_pundir_16' },
            { name: 'whatsapp', link: '9818891994' },
            { name: 'email', link: 'B22317@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Aditya Bagyan',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8jlfTs9EvUlrMC78dNGSEnVcpPI96zhWaqeDy',
          socialMediaLinks: [
            { name: 'linkedin', link: 'Aditya bagyan' },
            { name: 'instagram', link: 'Aditya.bagyan' },
            { name: 'whatsapp', link: '8979615916' },
            { name: 'email', link: 'b23003@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Priyanshu Maurya',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8lqyK2wlAw3fuBnaqkdIUrR1PbAD8sHzjOSCh',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/priyanshu-maurya-092b95344/' },
            { name: 'instagram', link: 'priyanshu_maurya06' },
            { name: 'whatsapp', link: '9120440922' },
            { name: 'email', link: 'divyanshumaurya328@gmail.com' },
          ],
        },
        { 
          name: 'Ankur Rathore',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8ZkBam7F1OxwUjyTlv03g8bLCGVSYHBiKo4mp',
          socialMediaLinks: [
            { name: 'linkedin', link: '' },
            { name: 'instagram', link: '' },
            { name: 'whatsapp', link: '6398886022' },
            { name: 'email', link: 'b21181@students.iitmandi.ac.in' },
          ],
        },
      ],
    },
    {
      id: 'team11',
      name: 'Security team',
      members: [
        { 
          name: 'Alok Kumar Yadav ',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg86E5XyqEmwX9hA86oIV0kMUetRYfrxvLGNiHJ',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/alok-yadav-371a75305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: 'https://www.instagram.com/__.al0k.__/profilecard/?igsh=b2lwemRvOTVlYjlh' },
            { name: 'whatsapp', link: '6394080409' },
            { name: 'email', link: 'b23426@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Devansh Garg ',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg83CU1Q6z72kmsCXMLPhjzWtoifAyncURqe9d8',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/devansh-garg-92888a241' },
            { name: 'instagram', link: 'devansh_garg_mma' },
            { name: 'whatsapp', link: '9910329901' },
            { name: 'email', link: 'devansh.garg3105@gmail.com' },
          ],
        },
      ],
    },
    {
      id: 'team12',
      name: 'Hospitality team',
      members: [
        { 
          name: 'Ananya Rai',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8OD9rsuZAVZirtFvpze2T4jfB9k1RaSXCLubx',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/ananya-rai-a54516267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'instagram', link: '' },
            { name: 'whatsapp', link: '7908161508' },
            { name: 'email', link: 'ananyarai050@gmail.com' },
          ],
        },
        { 
          name: 'Shivam Anand ',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81KzxZq0dFuSj7PyAlmGUCN6WXqKIfTRJibEM',
          socialMediaLinks: [
            { name: 'linkedin', link: '' },
            { name: 'instagram', link: '__friend.exe__' },
            { name: 'whatsapp', link: '7982600750' },
            { name: 'email', link: 'b23465@students.iitmandi.ac.in' },
          ],
        },
        { 
          name: 'Saurav Kumar ',
          photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg88mcZCZf4vby2KhTFrt1qAxpg70QM59SaBCRI',
          socialMediaLinks: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/saurav-kumar-0bb364284/' },
            { name: 'instagram', link: 'Sauravk_singhh' },
            { name: 'whatsapp', link: '9798490095' },
            { name: 'email', link: 'b23051@students.iitmandi.ac.in' },
          ],
        },
      ],
    },
  
    
  ];
  