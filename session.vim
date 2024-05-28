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
badd +19 src/app/assignments-new/assignments-list/assignments-list.component.ts
badd +6 src/app/assignments-new/assignments-list/assignments-list.component.html
badd +64 src/app/shared/assignments-new.service.ts
badd +14 src/app/app.routes.ts
badd +15 src/app/assignments-new/assignments-list-item/assignments-list-item.component.ts
badd +14 src/app/assignments-new/assignments-list-item/assignments-list-item.component.html
badd +213 data/db.json
badd +9 src/app/assignments-new/assignments-list-item/assignments-list-item.component.css
badd +1 src/app/assignments-new/assignments-new.model.ts
badd +4 src/app/shared/role.enum.ts
badd +14 src/app/assignments-new/assignments-list-item-student/assignments-list-item-student.component.ts
badd +5 src/app/assignments-new/assignments-list-item-student/assignments-list-item-student.component.html
badd +39 src/app/autorization.service.ts
badd +1 src/app/assignments-new/assignments-list-item-student/assignments-list-item-student.component.css
badd +37 src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.ts
badd +24 src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.html
badd +43 src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.css
badd +10 src/app/shared/assignments.service.ts
badd +22 src/app/assignments-new/rendu-dialog/rendu-dialog.component.ts
badd +7 src/app/assignments-new/rendu-dialog/rendu-dialog.component.html
badd +2 src/app/assignments-new/rendu-dialog/rendu-dialog.component.css
badd +6 src/app/assignments-new/annuler-rendu-dialog/annuler-rendu-dialog.component.html
badd +10 src/app/assignments-new/annuler-rendu-dialog/annuler-rendu-dialog.component.css
badd +9 src/app/assignments-new/annuler-rendu-dialog/annuler-rendu-dialog.component.ts
badd +9 src/app/assignments-new/assignments-list/assignments-list.component.css
badd +10 src/app/assignments-new/remarques-dialog/remarques-dialog.component.html
badd +14 src/app/assignments-new/remarques-dialog/remarques-dialog.component.ts
badd +1 src/app/assignments-new/remarques-dialog/remarques-dialog.component.css
badd +22 src/app/assignments-new/add-assignment/add-assignment.component.ts
badd +39 src/app/assignments-new/add-assignment/add-assignment.component.html
badd +8 src/app/assignments-new/add-assignment/add-assignment.component.css
badd +5 src/app/assignments/add-assignment/add-assignment.component.css
argglobal
%argdel
$argadd ~/itu/mbds/angular/front
edit src/app/assignments-new/add-assignment/add-assignment.component.ts
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 95 + 95) / 190)
exe '2resize ' . ((&lines * 20 + 22) / 44)
exe 'vert 2resize ' . ((&columns * 94 + 95) / 190)
exe '3resize ' . ((&lines * 20 + 22) / 44)
exe 'vert 3resize ' . ((&columns * 94 + 95) / 190)
argglobal
balt data/db.json
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
let s:l = 15 - ((14 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 15
normal! 020|
lcd ~/itu/mbds/angular/front
wincmd w
argglobal
if bufexists(fnamemodify("~/itu/mbds/angular/front/src/app/assignments-new/add-assignment/add-assignment.component.html", ":p")) | buffer ~/itu/mbds/angular/front/src/app/assignments-new/add-assignment/add-assignment.component.html | else | edit ~/itu/mbds/angular/front/src/app/assignments-new/add-assignment/add-assignment.component.html | endif
if &buftype ==# 'terminal'
  silent file ~/itu/mbds/angular/front/src/app/assignments-new/add-assignment/add-assignment.component.html
endif
balt ~/itu/mbds/angular/front/src/app/assignments-new/assignments-list/assignments-list.component.html
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
let s:l = 19 - ((15 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 19
normal! 011|
lcd ~/itu/mbds/angular/front
wincmd w
argglobal
if bufexists(fnamemodify("~/itu/mbds/angular/front/src/app/assignments-new/add-assignment/add-assignment.component.css", ":p")) | buffer ~/itu/mbds/angular/front/src/app/assignments-new/add-assignment/add-assignment.component.css | else | edit ~/itu/mbds/angular/front/src/app/assignments-new/add-assignment/add-assignment.component.css | endif
if &buftype ==# 'terminal'
  silent file ~/itu/mbds/angular/front/src/app/assignments-new/add-assignment/add-assignment.component.css
endif
balt ~/itu/mbds/angular/front/src/app/assignments/add-assignment/add-assignment.component.css
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
let s:l = 5 - ((4 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 5
normal! 0
lcd ~/itu/mbds/angular/front
wincmd w
exe 'vert 1resize ' . ((&columns * 95 + 95) / 190)
exe '2resize ' . ((&lines * 20 + 22) / 44)
exe 'vert 2resize ' . ((&columns * 94 + 95) / 190)
exe '3resize ' . ((&lines * 20 + 22) / 44)
exe 'vert 3resize ' . ((&columns * 94 + 95) / 190)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
