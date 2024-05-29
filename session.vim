let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/itu/mbds/angular/front
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +1 ~/itu/mbds/angular/front
badd +10 src/app/assignments-new/assignments-new.component.ts
badd +1 src/app/assignments-new/assignments-new.component.html
badd +18 src/app/assignments-new/assignments-list/assignments-list.component.ts
badd +6 src/app/assignments-new/assignments-list/assignments-list.component.html
badd +38 src/app/shared/assignments-new.service.ts
badd +10 src/app/app.routes.ts
badd +19 src/app/assignments-new/assignments-list-item/assignments-list-item.component.ts
badd +10 src/app/assignments-new/assignments-list-item/assignments-list-item.component.html
badd +11 data/db.json
badd +9 src/app/assignments-new/assignments-list-item/assignments-list-item.component.css
badd +1 src/app/assignments-new/assignments-new.model.ts
badd +4 src/app/shared/role.enum.ts
badd +14 src/app/assignments-new/assignments-list-item-student/assignments-list-item-student.component.ts
badd +5 src/app/assignments-new/assignments-list-item-student/assignments-list-item-student.component.html
badd +39 src/app/autorization.service.ts
badd +1 src/app/assignments-new/assignments-list-item-student/assignments-list-item-student.component.css
badd +2 src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.ts
badd +6 src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.html
badd +14 src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.css
badd +10 src/app/shared/assignments.service.ts
badd +11 src/app/assignments-new/rendu-dialog/rendu-dialog.component.ts
badd +1 src/app/assignments-new/rendu-dialog/rendu-dialog.component.html
badd +1 src/app/assignments-new/rendu-dialog/rendu-dialog.component.css
badd +6 src/app/assignments-new/annuler-rendu-dialog/annuler-rendu-dialog.component.html
badd +10 src/app/assignments-new/annuler-rendu-dialog/annuler-rendu-dialog.component.css
badd +16 src/app/assignments-new/annuler-rendu-dialog/annuler-rendu-dialog.component.ts
badd +18 src/app/students/students.component.ts
badd +11 src/app/shared/components/crud-table/crud-table.component.ts
badd +3 src/app/shared/components/crud-form/crud-form.component.ts
badd +1 src/app/students/students.component.html
badd +1 src/app/students/students.component.css
argglobal
%argdel
$argadd ~/itu/mbds/angular/front
edit src/app/students/students.component.ts
argglobal
balt src/app/students/students.component.html
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 25 - ((24 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 25
normal! 038|
lcd ~/itu/mbds/angular/front
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
