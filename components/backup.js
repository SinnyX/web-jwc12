// export default function Desktop() {
//   <Grid container justifyContent="center" align="center">
//     <Grid item xs={12} md={12}>
//       <h1>หมอหมึก</h1>
//       <p className="text_break_word">
//         ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ
//       </p>
//       <Button variant="contained" color="neutral" size="large">
//         จองคิว
//       </Button>
//     </Grid>

//     <Grid item xs={12} md={6} align="left" paddingLeft={15}>
//       <h1>ประวัติหมอหมึก</h1>
//       <Box sx={{ display: { xs: "block", md: "none" } }}>
//         หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวง
//         <br />
//         ด้วยลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ
//         <br />
//         ด้วยความสามารถที่หลากหลาย ทำให้หมอหมึก
//         <br />
//         สามารถเลือกวิธีการทำนายที่เหมาะสมกับแต่ละบุคคล
//         <br />
//         เพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
//       </Box>
//       <Box sx={{ display: { xs: "none", md: "block" } }}>
//         <p align="left">
//           หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วย
//           <br />
//           ลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ
//           <br />
//           <br />
//           ด้วยความสามารถที่หลากหลาย
//           <br />
//           ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะสมกับแต่ละ
//           <br />
//           บุคคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
//         </p>
//       </Box>
//     </Grid>
//     <Grid
//       item
//       xs={12}
//       md={6}
//       marginTop={5}
//       justifyContent="right"
//       align="right"
//       paddingRight={15}
//     >
//       <Image
//         component="img"
//         src="/avatars_squid2.png"
//         alt="Avatars Squid"
//         width={300}
//         height={250}
//       />
//     </Grid>
//     <Grid item xs={12} md={12}>
//       <h1>รีวิวจากลูกค้า</h1>
//     </Grid>
//     <Grid item xs={12} md={4} marginBottom={10}>
//       <Avatar alt="Avatars 1" sx={{ width: 180, height: 180 }}>
//         <PersonIcon />
//       </Avatar>
//       <h3>แมทธิว นักธุรกิจ</h3>
//       <Box sx={{ display: { xs: "block", md: "none" } }}>
//         หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจ
//         <br />
//         ได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ
//       </Box>
//       <Box sx={{ display: { xs: "none", md: "block" } }}>
//         หมอหมึกช่วยผมเรื่องฤกษ์ยามใน
//         <br />
//         การเจรจาธุรกิจได้มากเลย
//         <br />
//         ตอนนี้ขายดีเทน้ำเทท่าเลยครับ
//       </Box>
//     </Grid>
//     <Grid item xs={12} md={4} marginBottom={10}>
//       <Avatar alt="Avatars 2" sx={{ width: 180, height: 180 }}>
//         <PersonIcon />
//       </Avatar>
//       <h3>แจ็ค นักแสดง</h3>
//       <Box sx={{ display: { xs: "block", md: "none" } }}>
//         ต้องขอบคุณหมอหมึกในการ
//         <br />
//         ช่วยให้ความสัมพันธ์
//         <br />
//         ราบรื่นด้วยนะคะ
//         <br />
//         ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ
//       </Box>
//       <Box sx={{ display: { xs: "none", md: "block" } }}>
//         ต้องขอบคุณหมอหมึกในการช่วยให้ความ
//         <br />
//         สัมพันธ์ราบรื่นด้วยนะคะ
//         <br />
//         ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ
//       </Box>
//     </Grid>
//     <Grid item xs={12} md={4} marginBottom={5}>
//       <Avatar alt="Avatars 3" sx={{ width: 180, height: 180 }}>
//         <PersonIcon />
//       </Avatar>
//       <h3>น้ำใส นักศึกษา</h3>
//       <Box sx={{ display: { xs: "block", md: "none" } }}>
//         ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ
//         <br />
//         ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ
//         <br />
//         ดีนะที่ป้องกันเรื่องร้ายๆ ทันเวลา
//       </Box>
//       <Box sx={{ display: { xs: "none", md: "block" } }}>
//         ที่หมอหมึกบอกมานะคะ
//         <br />
//         เกิดเกือบหมดเลยค่ะ
//         <br />
//         ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ
//         <br />
//         ดีนะที่ป้องกันเรื่องร้ายๆ ทันเวลา
//       </Box>
//     </Grid>

//     <Grid
//       item
//       xs={12}
//       md={6}
//       marginTop={4}
//       marginBottom={5}
//       paddingLeft={15}
//       align="left"
//       sx={{ display: { xs: "none", md: "block" } }}
//     >
//       <iframe
//         container
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6661.069122782368!2d100.7740425967704!3d13.728985580661673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664988a1bedf%3A0xcc678f180e221cd0!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LmA4LiI4LmJ4Liy4LiE4Li44LiT4LiX4Lir4Liy4Lij4Lil4Liy4LiU4LiB4Lij4Liw4Lia4Lix4LiH!5e0!3m2!1sth!2sth!4v1655561617257!5m2!1sth!2sth"
//         width={500}
//         height={500}
//         style={{ border: 0 }}
//         allowfullscreen=""
//         loading="lazy"
//         referrerpolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </Grid>

//     <Grid
//       item
//       xs={12}
//       md={6}
//       marginBottom={5}
//       align="left"
//       style={{ marginLeft: "10%" }}
//       sx={{ display: { xs: "block", md: "none" } }}
//     >
//       <h1>ทำนายชะตากับหมอหมึก</h1>
//       สามารถจองคิวได้ในเว็บหรือ
//       <br />
//       อีเมล: octopus_fortune@teller.com
//       <br />
//       โทรศัพท์: 099 XXXX XXX
//       <br />
//       และมาที่สำนักที่
//       <br />
//       ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ
//       <br />
//       เขตอินเตอร์เน็ต กรุงเทพ 99999
//       <br />
//       ตามวันเวลาที่ได้นักไว้
//       <br />
//       จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ
//       <br />
//       10.00 - 18.30 น. พัก 12.00 - 13.00
//       <br />
//       เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
//     </Grid>

//     <Grid
//       item
//       xs={12}
//       md={6}
//       marginBottom={5}
//       sx={{ display: { xs: "block", md: "none" } }}
//     >
//       <iframe
//         container
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6661.069122782368!2d100.7740425967704!3d13.728985580661673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664988a1bedf%3A0xcc678f180e221cd0!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LmA4LiI4LmJ4Liy4LiE4Li44LiT4LiX4Lir4Liy4Lij4Lil4Liy4LiU4LiB4Lij4Liw4Lia4Lix4LiH!5e0!3m2!1sth!2sth!4v1655561617257!5m2!1sth!2sth"
//         width={300}
//         height={300}
//         style={{ border: 0 }}
//         allowfullscreen=""
//         loading="lazy"
//         referrerpolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </Grid>

//     <Grid
//       item
//       xs={12}
//       md={6}
//       marginBottom={5}
//       align="Right"
//       paddingLeft={25}
//       sx={{ display: { xs: "none", md: "block" } }}
//     >
//       <p align="Left">
//         <h1>ทำนายชะตากับหมอหมึก</h1>
//         สามารถจองคิวได้ในเว็บหรือ
//         <br />
//         อีเมล: octopus_fortune@teller.com
//         <br />
//         โทรศัพท์: 099 XXXX XXX
//         <br />
//         และมาที่สำนักที่
//         <br />
//         ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ
//         <br />
//         เขตอินเตอร์เน็ต กรุงเทพ 99999
//         <br />
//         ตามวันเวลาที่ได้นักไว้
//         <br />
//         จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ
//         <br />
//         10.00 - 18.30 น. พัก 12.00 - 13.00
//         <br />
//         เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
//       </p>
//     </Grid>
//   </Grid>;
// }

export default function Backup() {
  return <div></div>;
}
